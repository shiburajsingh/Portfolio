import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shibu Raj Singh - Java Backend & Full Stack Developer',
  description: 'Computer Science graduate specializing in Java, Spring Boot, Python, FastAPI, and modern web development. Building scalable backends and responsive applications.',
  keywords: [
    'Shibu Raj Singh',
    'Java Developer',
    'Full Stack Developer',
    'Spring Boot',
    'Python',
    'FastAPI',
    'React',
    'Backend Developer',
    'Software Engineer'
  ],
  authors: [{ name: 'Shibu Raj Singh' }],
  creator: 'Shibu Raj Singh',
  openGraph: {
    title: 'Shibu Raj Singh - Java Backend & Full Stack Developer',
    description: 'Building scalable backends and modern web applications with Java, Spring Boot, Python, and React.',
    url: 'https://shibu-raj-singh.vercel.app',
    siteName: 'Shibu Raj Singh Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shibu Raj Singh - Java Backend & Full Stack Developer',
    description: 'Building scalable backends and modern web applications.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
            <Navigation />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}