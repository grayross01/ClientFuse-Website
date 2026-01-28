import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Dynamically get all blog post slugs from the filesystem
function getBlogPosts(): { slug: string; lastModified: Date }[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    
    return entries
      .filter(entry => {
        // Only include directories that have a page.tsx file (actual blog posts)
        if (!entry.isDirectory()) return false
        const pagePath = path.join(blogDir, entry.name, 'page.tsx')
        return fs.existsSync(pagePath)
      })
      .map(entry => {
        const pagePath = path.join(blogDir, entry.name, 'page.tsx')
        const stats = fs.statSync(pagePath)
        return {
          slug: entry.name,
          lastModified: stats.mtime,
        }
      })
      .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
  } catch (error) {
    console.error('Error reading blog directory:', error)
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clientfuse.io'
  
  // Dynamically get all blog posts from the filesystem
  const blogPosts = getBlogPosts()
  
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
