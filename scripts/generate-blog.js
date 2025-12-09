#!/usr/bin/env node
/*
  Generates SEO-optimized blog posts in app/blog/<slug>/page.tsx
  Uses detailed topic data from scripts/blog-topics.json
  Maintains state in scripts/.blog-state.json to rotate topics.
  
  SEO Features:
  - OpenGraph metadata for social sharing
  - Twitter card metadata
  - Article schema markup (JSON-LD)
  - Canonical URLs
  - Keywords meta tags
  - Related articles cross-linking
*/
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const topicsPath = path.join(__dirname, 'blog-topics.json');
const statePath = path.join(__dirname, '.blog-state.json');
const blogDir = path.join(repoRoot, 'app', 'blog');
const blogListingPath = path.join(blogDir, 'page.tsx');

const SITE_URL = 'https://clientfuse.io';
const SITE_NAME = 'ClientFuse';
const DEFAULT_IMAGE = 'https://clientfuse.io/og-image.png';

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n');
}

function safeSlug(slug) {
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function toHumanDate() {
  return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function toISODate() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function toISODateTime() {
  return new Date().toISOString();
}

function escapeJSX(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/`/g, '\\`');
}

function escapeForJSON(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function generateKeywords(title, category, sections) {
  // Extract keywords from title and headings
  const words = new Set();
  
  // Add category
  words.add(category.toLowerCase());
  
  // Common marketing agency keywords
  const baseKeywords = ['marketing agency', 'digital marketing', 'agency tips', 'client management'];
  baseKeywords.forEach(k => words.add(k));
  
  // Extract from title
  title.toLowerCase().split(/\s+/).forEach(word => {
    if (word.length > 4 && !['with', 'from', 'that', 'this', 'your', 'their', 'about'].includes(word)) {
      words.add(word);
    }
  });
  
  // Extract from section headings
  sections.forEach(s => {
    s.heading.toLowerCase().split(/\s+/).forEach(word => {
      if (word.length > 4) words.add(word);
    });
  });
  
  return Array.from(words).slice(0, 10).join(', ');
}

function generateSectionsJSX(sections) {
  return sections.map(section => `
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">${section.heading}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ${section.content}
          </p>`).join('\n');
}

function generateLinksJSX(links) {
  if (!links || links.length === 0) return '';
  
  const linkItems = links.map(l => 
    `            <li>
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                ${l.label}
              </a>
            </li>`
  ).join('\n');
  
  return `
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Resources & Further Reading</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
${linkItems}
          </ul>`;
}

function getRelatedPosts(currentSlug, allTopics, count = 3) {
  // Get other topics as related posts, excluding current
  const related = allTopics
    .filter(t => safeSlug(t.slug || t.title) !== currentSlug)
    .slice(0, count);
  
  return related.map(t => ({
    slug: safeSlug(t.slug || t.title),
    title: t.title,
    category: t.category
  }));
}

function generateRelatedPostsJSX(relatedPosts) {
  if (!relatedPosts || relatedPosts.length === 0) return '';
  
  const postItems = relatedPosts.map(post => 
    `            <Link 
              href="/blog/${post.slug}"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-blue-600 font-medium">${post.category}</span>
              <h4 className="text-gray-900 font-semibold mt-1 line-clamp-2">${post.title}</h4>
            </Link>`
  ).join('\n');
  
  return `
          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
${postItems}
            </div>
          </div>`;
}

function generatePostTSX(meta, allTopics) {
  const sectionsJSX = generateSectionsJSX(meta.sections || []);
  const linksJSX = generateLinksJSX(meta.links);
  const readTime = Math.max(5, Math.ceil((meta.sections || []).reduce((acc, s) => acc + s.content.length, 0) / 1000));
  const keywords = generateKeywords(meta.title, meta.category, meta.sections || []);
  const relatedPosts = getRelatedPosts(meta.slug, allTopics);
  const relatedPostsJSX = generateRelatedPostsJSX(relatedPosts);
  const canonicalUrl = `${SITE_URL}/blog/${meta.slug}`;
  const isoDate = toISODateTime();
  
  // Create Article schema for JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.summary,
    "image": DEFAULT_IMAGE,
    "author": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/combined_logo.png`
      }
    },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": meta.category,
    "wordCount": (meta.sections || []).reduce((acc, s) => acc + s.content.split(/\s+/).length, 0)
  };
  
  return `import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${escapeJSX(meta.title)} | ClientFuse Blog',
  description: '${escapeJSX(meta.summary || '')}',
  keywords: '${escapeJSX(keywords)}',
  authors: [{ name: '${SITE_NAME}' }],
  openGraph: {
    title: '${escapeJSX(meta.title)}',
    description: '${escapeJSX(meta.summary || '')}',
    url: '${canonicalUrl}',
    siteName: '${SITE_NAME}',
    type: 'article',
    publishedTime: '${isoDate}',
    modifiedTime: '${isoDate}',
    section: '${meta.category}',
    images: [
      {
        url: '${DEFAULT_IMAGE}',
        width: 1200,
        height: 630,
        alt: '${escapeJSX(meta.title)}',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${escapeJSX(meta.title)}',
    description: '${escapeJSX(meta.summary || '')}',
    images: ['${DEFAULT_IMAGE}'],
  },
  alternates: {
    canonical: '${canonicalUrl}',
  },
};

export default function BlogPost() {
  const articleSchema = ${JSON.stringify(articleSchema, null, 4).split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n')};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
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
                <time dateTime="${toISODate()}">${toHumanDate()}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>${readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ${meta.summary}
            </p>
${sectionsJSX}
${linksJSX}
${relatedPostsJSX}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mt-16 not-prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Your Client Onboarding</h3>
              <p className="text-gray-700 mb-6">
                Stop chasing clients for account access. ClientFuse lets you send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.
              </p>
              <Link href="https://app.clientfuse.io/auth/login?signup=true" className="btn-primary inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
`;
}

function updateBlogListing(topic, slug) {
  try {
    let content = fs.readFileSync(blogListingPath, 'utf8');
    
    const readTime = Math.max(5, Math.ceil((topic.sections || []).reduce((acc, s) => acc + s.content.length, 0) / 1000));
    
    const newEntry = `  {
    slug: '${slug}',
    title: '${escapeJSX(topic.title)}',
    excerpt: '${escapeJSX(topic.summary || '')}',
    date: '${toISODate()}',
    readTime: '${readTime} min read',
    category: '${topic.category}',
    featured: false
  },`;

    // Find the blogPosts array and add the new entry
    const arrayMatch = content.match(/const blogPosts = \[([\s\S]*?)\];/);
    if (arrayMatch) {
      const existingArray = arrayMatch[1];
      // Check if this post already exists
      if (!existingArray.includes(`slug: '${slug}'`)) {
        // Remove trailing comma if present to avoid double commas
        let trimmedArray = existingArray.trimEnd();
        if (trimmedArray.endsWith(',')) {
          trimmedArray = trimmedArray.slice(0, -1);
        }
        const newArray = trimmedArray + ',\n' + newEntry;
        content = content.replace(arrayMatch[0], `const blogPosts = [${newArray}\n];`);
        fs.writeFileSync(blogListingPath, content);
        console.log(`Updated blog listing with: ${topic.title}`);
      }
    }
  } catch (err) {
    console.log('Could not update blog listing:', err.message);
  }
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
    slug: slug,
    category: topic.category || 'Blog',
    summary: topic.summary || '',
    sections: topic.sections || [],
    links: topic.links || [],
  }, topics);

  fs.writeFileSync(pagePath, tsx);
  console.log(`Generated SEO-optimized blog post: app/blog/${slug}/page.tsx`);
  
  // Update the blog listing page
  updateBlogListing(topic, slug);
}

main();
