import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { AuthProvider } from '@/context/AuthContext'
import { Analytics } from '@vercel/analytics/next'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tuong-portfolio.vercel.app'),
  title: {
    default: 'Tuong Q. Phung - AI & Embedded Systems Engineer',
    template: '%s | Tuong Q. Phung'
  },
  description: 'AI & Embedded Systems Engineer specializing in machine learning, computer vision, and IoT solutions. View my projects and experience.',
  keywords: [
    'AI Engineer',
    'Embedded Systems',
    'Machine Learning',
    'Computer Vision',
    'IoT Solutions',
    'Robotics',
    'FPGA',
    'Portfolio',
    'Tuong Phung'
  ],
  authors: [{ name: 'Tuong Q. Phung' }],
  creator: 'Tuong Q. Phung',
  publisher: 'Tuong Q. Phung',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tuong-portfolio.vercel.app',
    title: 'Tuong Q. Phung - AI & Embedded Systems Engineer',
    description: 'AI & Embedded Systems Engineer specializing in machine learning, computer vision, and IoT solutions.',
    siteName: 'Tuong Q. Phung Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tuong Q. Phung - AI & Embedded Systems Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuong Q. Phung - AI & Embedded Systems Engineer',
    description: 'AI & Embedded Systems Engineer specializing in machine learning, computer vision, and IoT solutions.',
    creator: '@tuongphung',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://tuong-portfolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Layout>
            {children}
          </Layout>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
} 