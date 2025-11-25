import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NexRead | Dashboard',
  description:
    'A lightweight e-library platform that lets users browse and access digital books with a fast, distraction-free interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {/* Main content */}
        <div className="grid md:grid-cols-[1fr_65vw_1fr]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
