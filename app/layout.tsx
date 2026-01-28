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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-48x48.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon-48x48.svg", sizes: "48x48" },
    ],
  },
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
    "logo": "https://clientfuse.io/combined_logo.png",
    "image": "https://clientfuse.io/combined_logo.png",
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
        {/* Favicon - Multiple formats for better Google compatibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=9" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg?v=9" />
        <link rel="icon" type="image/svg+xml" sizes="48x48" href="/favicon-48x48.svg?v=9" />
        <link rel="apple-touch-icon" href="/favicon-48x48.svg?v=9" />
        {/* Ensure favicon is accessible at root for Google */}
        <link rel="shortcut icon" href="/favicon.svg?v=9" />
        
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
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '814220875012724');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=814220875012724&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ClientFuse",
            "url": "https://clientfuse.io",
            "logo": "https://clientfuse.io/combined_logo.png",
            "sameAs": [
              "https://www.facebook.com/clientfuse"
            ]
          }) }}
        />
        
        {/* Crisp Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="aaea48f9-9674-4768-a4ca-d65bb823f182";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

