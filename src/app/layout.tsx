import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageBackground } from '@/components/layout/PageBackground'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { MainContent } from '@/components/layout/MainContent'
import { personalInfo, navLinks, socialLinks } from '@/data/portfolio'

export const metadata: Metadata = {
  title: `${personalInfo.name} - Portfolio`,
  description: personalInfo.intro,
  keywords: ['portfolio', 'web developer', 'software engineer', 'developer'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: `${personalInfo.name} - Portfolio`,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.intro,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.intro,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <PageBackground />
        <ScrollProgress />
        <Navbar links={navLinks} personalName={personalInfo.name} />
        <MainContent>{children}</MainContent>
        <Footer socialLinks={socialLinks} personalName={personalInfo.name} />
      </body>
    </html>
  )
}
