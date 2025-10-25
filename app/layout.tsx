import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClientFuse - Simplify Client Account Access for Marketing Agencies",
  description: "The easiest way to get access to your client accounts. Send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms. No more back-and-forth emails or complex instructions.",
  keywords: "marketing agency tools, client account access, social media management, google ads access, facebook ads access, instagram access, marketing automation, agency workflow, client onboarding, account management, marketing platform integration",
  authors: [{ name: "ClientFuse" }],
  creator: "ClientFuse",
  publisher: "ClientFuse",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clientfuse.io",
    siteName: "ClientFuse",
    title: "ClientFuse - Simplify Client Account Access for Marketing Agencies",
    description: "The easiest way to get access to your client accounts. Send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.",
    images: [
      {
        url: "https://clientfuse.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClientFuse - Simplify Client Account Access",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClientFuse - Simplify Client Account Access for Marketing Agencies",
    description: "The easiest way to get access to your client accounts. Send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.",
    images: ["https://clientfuse.io/og-image.png"],
  },
  alternates: {
    canonical: "https://clientfuse.io",
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ClientFuse",
    "description": "The easiest way to get access to your client accounts. Send one simple link to get instant access to Facebook, Google, Instagram, and more marketing platforms.",
    "url": "https://clientfuse.io",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "39",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "39",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="48x48" href="/favicon-48x48.svg?v=3" />
        <link rel="apple-touch-icon" href="/favicon-48x48.svg?v=3" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BZNV0WEVZS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BZNV0WEVZS');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

