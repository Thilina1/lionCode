import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Open_Sans, Roboto } from 'next/font/google';
import ClientProviders from '@/components/layout/client-providers';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['400', '600']
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['700', '900']
});


export const metadata: Metadata = {
  title: 'Lion Code Technologies',
  description: 'Automating business processes and solving business problems using IT in Sri Lanka.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${roboto.variable}`}>
      <head>
      </head>
      <body className="font-body antialiased">
        <ClientProviders>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-[120px]">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
