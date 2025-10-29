// app/layout.tsx
---
layout: 'app'
---

import { Link } from 'next/link';
import { head } from 'next/head';
import type { AppRouter } from 'next/app';
import type { AppProps } from 'next/app';

interface AppLayoutProps extends AppProps {
  siteTitle: string;
  authStatus?: boolean; // Conditional rendering state
  children: React.ReactNode;
}

/**
 * Main page layout for Linkedout v2
 */
export default function AppLayout({
  siteTitle,
  authStatus,
  children,
}: AppLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Base meta tags */}
        {head(
          <title>{siteTitle}</title>,
          <meta name="viewport" content="width=device-width,initial-scale=1">
        )}

        {/* SEO meta tags */}
        <meta name="description" content="Linkedout - Your career marketplace for job seekers in the employment industry" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Linkedout - Find your next job in the employment industry" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com`} />
        <meta property="og:image" content="/favicon.ico" />
      </head>

      <body class="bg-white text-gray-800">
        {/* Google Analytics & Analytics Tracking */}
        {/* INSERT PLACEHOLDERS
           - Add analytics script tags here when required
           - Track page views and user interactions
        */}

        <AppRouter />
        
        <div class="relative h-screen min-h-screen w-full flex flex-col space-y-4">
          {/* Header Component */}
          <header class="bg-white shadow-md bg-gray-50">
            <div class="container mx-auto px-4 py-4 flex items-center justify-between">
              {/* Navigation Links */}
              <nav class="flex items-center">
                <Link href="/">
                  <a class="text-2xl font-bold text-gray-700">
                    Linkedout
                  </a>
                </Link>
                
                {/* Auth Provider Placeholders */}
                {/* Clerk Auth Provider -->
                {/* Supabase Auth Provider -->}
                
                {authStatus && (
                  <div class="ml-4 flex items-center">
                    <Link href="/profile" class="text-gray-600">
                      Dashboard
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </header>

          {/* Main Content Container */}
          <main class="container mx-auto px-4 py-8 max-w-4xl">
            {children}
          </main>

          {/* Footer Component */}
          <footer class="bg-gray-50 text-center pt-12">
            {/* Analytics Tracking Placeholders */}
            {/* LEFT PLACEHOLDER: Google Analytics -->
            {/* RIGHT PLACEHOLDER: Meta Pixel Tracking -->}
            
            <div class="mt-8">
              <p>&copy; {new Date().getFullYear()} Linkedout. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}