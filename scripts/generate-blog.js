#!/usr/bin/env node
/*
  Generates a blog post in app/blog/<slug>/page.tsx using topics from scripts/blog-topics.json
  Maintains state in scripts/.blog-state.json to rotate topics.
*/
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const topicsPath = path.join(__dirname, 'blog-topics.json');
const statePath = path.join(__dirname, '.blog-state.json');
const blogDir = path.join(repoRoot, 'app', 'blog');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n');
}

function safeSlug(slug) {
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function formatDateISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function toHumanDate() {
  return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function generatePostTSX(meta) {
  const links = (meta.links || []).map(l => `- [${l.label}](${l.url})`).join('\n');
  return `import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">${meta.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">${meta.title}</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>${toHumanDate()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            ${meta.summary || 'A practical, agency-focused walkthrough with actionable steps.'}
          </p>

          <h2>Useful Links</h2>
          <p>Resources referenced in this article:</p>
          <div>
{` + '            ' + `}
${links ? links.split('\n').map(l => `            ${l}`).join('\n') : '            - No external links provided'}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Client Access</h3>
            <p className="text-gray-700 mb-6">ClientFuse simplifies access onboarding with one secure link.</p>
            <Link href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary inline-block">Start Free Trial</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
`;
}

function main() {
  const topics = readJson(topicsPath);
  let state = { index: 0 };
  if (fs.existsSync(statePath)) {
    state = readJson(statePath);
  }

  const topic = topics[state.index % topics.length];
  state.index = (state.index + 1) % topics.length;
  writeJson(statePath, state);

  const slug = safeSlug(topic.slug || topic.title);
  const targetDir = path.join(blogDir, slug);
  ensureDir(targetDir);
  const pagePath = path.join(targetDir, 'page.tsx');

  const tsx = generatePostTSX({
    title: topic.title,
    category: topic.category || 'Blog',
    links: topic.links || [],
  });

  fs.writeFileSync(pagePath, tsx);
  console.log(`Generated blog post: app/blog/${slug}/page.tsx`);
}

main();



