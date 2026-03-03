import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zync - AI-Powered Messaging App',
  description: 'The future of messaging is AI-integrated. Experience real-time chat, AI assistant, creative suite, and secure communication with Zync App.',
  keywords: ['AI Chat App', 'Zync', 'Secure Messaging', 'AI-powered communication'],
  generator: 'v0.app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Zync - AI-Powered Messaging App',
    description: 'The future of messaging is AI-integrated.',
    type: 'website',
  },
  themeColor: '#003EE3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
