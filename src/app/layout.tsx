import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Connecting Cubes | Logistics & Transportation Coordination India',
  description:
    'Reliable logistics coordination connecting businesses across India with dedicated road, rail, and air transportation solutions. End-to-end cargo movement across 20,000+ PIN codes.',
  keywords: [
    'logistics coordination',
    'transportation India',
    'freight coordination',
    'road transport',
    'rail freight',
    'air cargo',
    'B2B logistics',
    'Connecting Cubes',
  ],
  authors: [{ name: 'Connecting Cubes' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#17202A] selection:bg-[#EAF4FC] selection:text-[#0B2A4A] font-sans">
        {children}
      </body>
    </html>
  );
}
