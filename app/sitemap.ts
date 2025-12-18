import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clientfuse.io'
  
  // All blog posts with their publish dates
  const blogPosts = [
    { slug: 'top-5-social-media-management-platforms-agencies', date: '2024-01-15' },
    { slug: 'how-to-get-client-access-facebook-ads', date: '2024-10-24' },
    { slug: 'complete-guide-client-onboarding-marketing-agencies', date: '2025-11-29' },
    { slug: 'how-to-price-marketing-agency-services-2025', date: '2025-12-01' },
    { slug: 'google-ads-account-structure-best-practices-agencies', date: '2025-12-04' },
    { slug: 'building-repeatable-client-reporting-system', date: '2025-12-08' },
    { slug: 'managing-remote-marketing-teams-leading-agencies', date: '2025-12-08' },
    { slug: 'facebook-ads-ecommerce-agency-playbook', date: '2025-12-11' },
    { slug: 'how-to-fire-client-when-you-should', date: '2025-12-15' },
  ]
  
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
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
