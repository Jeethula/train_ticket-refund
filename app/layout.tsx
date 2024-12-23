import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IRCTC Train Refund Calculator | Calculate Your Ticket Refund',
  description: 'Calculate your train ticket refund amount instantly based on official IRCTC rules. Free online tool for Indian Railways passengers.',
  keywords: 'IRCTC refund, train ticket refund, Indian Railways refund calculator, railway refund rules',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication", 
    "name": "IRCTC Refund Calculator",
    "description": "Calculate your train ticket refund amount based on IRCTC rules",
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Primary Meta Tags */}
        <link rel="canonical" href="https://yourwebsite.com/refund-calculator" />
        <meta name="language" content="English" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IRCTC Refund Calculator" />
        <meta property="og:title" content="IRCTC Train Refund Calculator | Calculate Your Ticket Refund" />
        <meta property="og:description" content="Calculate your train ticket refund amount based on IRCTC rules" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/refund-calculator" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IRCTC Train Refund Calculator" />
        <meta name="twitter:description" content="Calculate your train ticket refund instantly" />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />

        {/* Related Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Navigation with Backlinks */}
          {/* <nav className="py-4">
            <ul className="flex space-x-4">
              <li><a href="https://indianrailways.gov.in">Indian Railways</a></li>
              <li><a href="https://www.irctc.co.in">IRCTC Official</a></li>
              <li><a href="/refund-rules">Refund Rules</a></li>
              <li><a href="/fare-calculator">Fare Calculator</a></li>
            </ul>
          </nav> */}
          {children}
          <Toaster /> 
        </ThemeProvider>
      </body>
    </html>
  );
}