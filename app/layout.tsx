import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import favicon from "@/public/favicon.ico"

import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Quadgentics - Portfolio',
  icons: {
    icon: [{ url: '/favicon.ico' }],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/favicon.ico' }],
  },
 description: 'Professional portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
::selection {
  background: hsl(var(--primary) / 0.2);
  color: hsl(var(--primary));
}
        `}</style>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
        <Header />
          <div className="flex-1 ">{children}</div>
        </div>
      </body>
    </html>
  )
}
