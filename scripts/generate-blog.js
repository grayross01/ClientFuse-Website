#!/usr/bin/env node
/*
  Generates SEO-optimized blog posts using OpenAI
  Uses topic seeds from scripts/blog-topics.json
  Maintains state in scripts/.blog-state.json to rotate topics
  
  SEO Features:
  - AI-generated content optimized for target keywords
  - DALL-E generated featured images
  - OpenGraph metadata for social sharing
  - Twitter card metadata
  - Article schema markup (JSON-LD)
  - Canonical URLs
  - Keywords meta tags
  - Related articles cross-linking
  
  Required Environment Variable:
  - OPENAI_API_KEY
*/
const fs = require('fs');
const path = require('path');
const https = require('https');

const repoRoot = path.resolve(__dirname, '..');
const topicsPath = path.join(__dirname, 'blog-topics.json');
const statePath = path.join(__dirname, '.blog-state.json');
const blogDir = path.join(repoRoot, 'app', 'blog');
const blogListingPath = path.join(blogDir, 'page.tsx');
const publicBlogDir = path.join(repoRoot, 'public', 'blog');

const SITE_URL = 'https://clientfuse.io';
const SITE_NAME = 'ClientFuse';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

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

// Generate featured image using DALL-E
async function generateImageWithDALLE(topic, slug) {
  if (!OPENAI_API_KEY) {
    console.error('ERROR: OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const imagePrompt = `Create a professional, modern blog header image for a marketing agency article titled "${topic.title}". 
  
Style: Clean, minimalist, corporate illustration style with a blue and purple gradient color scheme.
Theme: Digital marketing, client management, business efficiency.
Elements: Abstract shapes, icons related to ${topic.category}, professional business imagery.
Mood: Professional, trustworthy, modern, tech-forward.
Do NOT include any text, words, or letters in the image.
The image should work well as a 1200x630 blog header/social share image.`;

  const requestBody = JSON.stringify({
    model: 'dall-e-3',
    prompt: imagePrompt,
    n: 1,
    size: '1792x1024',
    quality: 'standard',
    response_format: 'url'
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.openai.com',
      port: 443,
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(`DALL-E API Error: ${response.error.message}`));
            return;
          }
          const imageUrl = response.data[0].url;
          
          // Download and save the image
          const imagePath = await downloadImage(imageUrl, slug);
          resolve(imagePath);
        } catch (e) {
          reject(new Error(`Failed to generate image: ${e.message}`));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// Download image from URL, compress it, and save to public/blog/
async function downloadImage(url, slug) {
  ensureDir(publicBlogDir);
  const tempPath = path.join(publicBlogDir, `${slug}-temp.png`);
  const finalPath = path.join(publicBlogDir, `${slug}.webp`);
  
  // Download the image first
  await new Promise((resolve, reject) => {
    const file = fs.createWriteStream(tempPath);
    
    const downloadUrl = (targetUrl) => {
      https.get(targetUrl, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          downloadUrl(response.headers.location);
        } else {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }
      }).on('error', reject);
    };
    
    downloadUrl(url);
  });
  
  // Compress and convert to WebP using sharp
  try {
    const sharp = require('sharp');
    await sharp(tempPath)
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(finalPath);
    
    // Remove temp file
    fs.unlinkSync(tempPath);
    
    console.log(`Image compressed: ${finalPath}`);
    return `/blog/${slug}.webp`;
  } catch (err) {
    console.log('Sharp not available, keeping original PNG:', err.message);
    // If sharp fails, rename temp to final PNG
    const pngPath = path.join(publicBlogDir, `${slug}.png`);
    fs.renameSync(tempPath, pngPath);
    return `/blog/${slug}.png`;
  }
}

// Call OpenAI API to generate blog content
async function generateContentWithAI(topic) {
  if (!OPENAI_API_KEY) {
    console.error('ERROR: OPENAI_API_KEY environment variable is required');
    process.exit(1);
  }

  const prompt = `You are an expert content writer for ClientFuse, a SaaS tool that helps marketing agencies get access to client ad accounts (Facebook, Google, Instagram, etc.) through a single, simple link instead of back-and-forth emails.

Write a comprehensive, SEO-optimized blog post for marketing agency owners and managers.

TOPIC: ${topic.title}

TARGET KEYWORDS (naturally incorporate these): ${topic.target_keywords.join(', ')}

SEARCH INTENT: ${topic.search_intent}

CONTENT OUTLINE (follow this structure):
${topic.outline.map((section, i) => `${i + 1}. ${section}`).join('\n')}

CTA ANGLE FOR CLIENTFUSE: ${topic.cta_angle}

REQUIREMENTS:
1. Write 1,200-1,800 words of high-quality, actionable content
2. Use a professional but conversational tone
3. Include specific, practical advice agencies can use immediately
4. Naturally mention ClientFuse as a solution where relevant (don't be salesy)
5. Format the response as JSON with this structure:

{
  "summary": "A compelling 2-3 sentence meta description (under 160 characters) that includes the primary keyword",
  "sections": [
    {
      "heading": "Section heading",
      "content": "Detailed paragraph content for this section. Make it substantial (150-300 words per section)."
    }
  ]
}

IMPORTANT: 
- Return ONLY valid JSON, no markdown code blocks
- Each section should be 150-300 words
- The summary should be under 160 characters for SEO
- Make content genuinely helpful, not just promotional`;

  const requestBody = JSON.stringify({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are an expert SEO content writer specializing in marketing agency topics. Always respond with valid JSON only.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 4000
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.openai.com',
      port: 443,
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(`OpenAI API Error: ${response.error.message}`));
            return;
          }
          const content = response.choices[0].message.content;
          // Parse the JSON response from GPT
          const parsed = JSON.parse(content);
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Failed to parse OpenAI response: ${e.message}\nResponse: ${data.substring(0, 500)}`));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

function generateKeywords(title, category, targetKeywords) {
  const words = new Set(targetKeywords || []);
  words.add(category.toLowerCase());
  
  // Base ClientFuse keywords
  const baseKeywords = ['marketing agency', 'client access', 'ad account access', 'ClientFuse'];
  baseKeywords.forEach(k => words.add(k));
  
  return Array.from(words).slice(0, 10).join(', ');
}

function generateSlugFromHeading(heading) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function generateTableOfContents(sections) {
  if (!sections || sections.length < 2) return '';
  
  const tocItems = sections.map(section => {
    const id = generateSlugFromHeading(section.heading);
    return `              <li>
                <a href="#${id}" className="text-blue-600 hover:text-blue-800 hover:underline">
                  ${escapeJSX(section.heading)}
                </a>
              </li>`;
  }).join('\n');
  
  return `
            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-12 not-prose">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
${tocItems}
              </ol>
            </nav>`;
}

function generateSectionsJSX(sections) {
  return sections.map(section => {
    const id = generateSlugFromHeading(section.heading);
    return `
          <h2 id="${id}" className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">${escapeJSX(section.heading)}</h2>
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            ${escapeJSX(section.content)}
          </p>`;
  }).join('\n');
}

function getRelatedPosts(currentSlug, allTopics, count = 3) {
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
              <span className="text-xs text-blue-600 font-medium">${escapeJSX(post.category)}</span>
              <h4 className="text-gray-900 font-semibold mt-1 line-clamp-2">${escapeJSX(post.title)}</h4>
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
  const tocJSX = generateTableOfContents(meta.sections || []);
  const readTime = Math.max(5, Math.ceil((meta.sections || []).reduce((acc, s) => acc + s.content.length, 0) / 1000));
  const keywords = generateKeywords(meta.title, meta.category, meta.target_keywords);
  const relatedPosts = getRelatedPosts(meta.slug, allTopics);
  const relatedPostsJSX = generateRelatedPostsJSX(relatedPosts);
  const canonicalUrl = `${SITE_URL}/blog/${meta.slug}`;
  const isoDate = toISODateTime();
  const imageUrl = meta.imagePath ? `${SITE_URL}${meta.imagePath}` : `${SITE_URL}/og-image.png`;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.summary,
    "image": imageUrl,
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
  
  // Breadcrumb schema for better search appearance
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": meta.title,
        "item": canonicalUrl
      }
    ]
  };
  
  // Generate featured image JSX if we have a custom image
  const featuredImageJSX = meta.imagePath ? `
            {/* Featured Image */}
            <div className="mb-12 -mx-4 sm:mx-0">
              <img 
                src="${meta.imagePath}" 
                alt="${escapeJSX(meta.title)}"
                className="w-full rounded-xl shadow-lg"
              />
            </div>` : '';
  
  return `import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ChevronRight } from 'lucide-react';
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
        url: '${imageUrl}',
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
    images: ['${imageUrl}'],
  },
  alternates: {
    canonical: '${canonicalUrl}',
  },
};

export default function BlogPost() {
  const articleSchema = ${JSON.stringify(articleSchema, null, 4).split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n')};

  const breadcrumbSchema = ${JSON.stringify(breadcrumbSchema, null, 4).split('\n').map((line, i) => i === 0 ? line : '  ' + line).join('\n')};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium truncate max-w-[200px]">${escapeJSX(meta.title)}</span>
            </nav>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">${meta.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">${escapeJSX(meta.title)}</h1>
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
${featuredImageJSX}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ${escapeJSX(meta.summary)}
            </p>
${tocJSX}
${sectionsJSX}
${relatedPostsJSX}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 mt-16 not-prose">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Your Client Onboarding</h3>
              <p className="text-gray-700 mb-6">
                Stop chasing clients for account access. ClientFuse lets you send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.
              </p>
              <a 
                href="https://app.clientfuse.io/auth/login?signup=true" 
                className="btn-primary inline-block"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                    (window as any).fbq('track', 'Lead', { content_name: 'Blog CTA', content_category: 'Blog' });
                  }
                }}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
`;
}

function updateBlogListing(topic, slug, summary, imagePath) {
  try {
    let content = fs.readFileSync(blogListingPath, 'utf8');
    
    const readTime = Math.max(5, Math.ceil((topic.outline || []).length * 200 / 200));
    
    const newEntry = `  {
    slug: '${slug}',
    title: '${escapeJSX(topic.title)}',
    excerpt: '${escapeJSX(summary || '')}',
    date: '${toISODate()}',
    readTime: '${readTime} min read',
    category: '${topic.category}',
    image: '${imagePath || ''}',
    featured: false
  },`;

    const arrayMatch = content.match(/const blogPosts = \[([\s\S]*?)\];/);
    if (arrayMatch) {
      const existingArray = arrayMatch[1];
      if (!existingArray.includes(`slug: '${slug}'`)) {
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

async function main() {
  console.log('Starting blog generation...');
  
  const topics = readJson(topicsPath);
  let state = { index: 0 };
  if (fs.existsSync(statePath)) {
    state = readJson(statePath);
  }

  const topic = topics[state.index % topics.length];
  const slug = safeSlug(topic.slug || topic.title);
  console.log(`Generating post ${state.index + 1}/${topics.length}: "${topic.title}"`);
  
  // Generate content with AI
  console.log('Calling OpenAI API to generate content...');
  let generatedContent;
  try {
    generatedContent = await generateContentWithAI(topic);
    console.log('Content generated successfully');
  } catch (err) {
    console.error('Failed to generate content:', err.message);
    process.exit(1);
  }

  // Generate featured image with DALL-E
  console.log('Generating featured image with DALL-E...');
  let imagePath = null;
  try {
    imagePath = await generateImageWithDALLE(topic, slug);
    console.log(`Image generated and saved to: ${imagePath}`);
  } catch (err) {
    console.error('Failed to generate image (continuing without image):', err.message);
    // Continue without image - not a fatal error
  }

  // Update state for next run
  state.index = (state.index + 1) % topics.length;
  writeJson(statePath, state);

  const targetDir = path.join(blogDir, slug);
  ensureDir(targetDir);
  const pagePath = path.join(targetDir, 'page.tsx');

  const tsx = generatePostTSX({
    title: topic.title,
    slug: slug,
    category: topic.category || 'Blog',
    summary: generatedContent.summary || '',
    sections: generatedContent.sections || [],
    target_keywords: topic.target_keywords || [],
    imagePath: imagePath,
  }, topics);

  fs.writeFileSync(pagePath, tsx);
  console.log(`Generated SEO-optimized blog post: app/blog/${slug}/page.tsx`);
  
  // Update the blog listing page
  updateBlogListing(topic, slug, generatedContent.summary, imagePath);
  
  console.log('Blog generation complete!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
