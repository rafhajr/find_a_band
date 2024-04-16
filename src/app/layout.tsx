import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Providers from './providers';

import './globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

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
      <body className={poppins.className}>
        <Providers>
          <main className="dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
