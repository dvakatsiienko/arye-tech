import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Navigation } from '@/components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description:
    "The world's most advanced gaming mouse. 46 grams of pure innovation.",
  title: 'ARYE RCC-1 - Revolutionary Gaming Mouse',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
