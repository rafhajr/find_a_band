import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Find a Band',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <main className="dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
