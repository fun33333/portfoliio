import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/header'
import SmoothScroll from '@/components/SmoothScroll'
import { ChatWidget } from '@/components/chat/chat-widget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const lastica = localFont({
  src: '../public/fonts/Lastica.ttf',
  variable: '--font-lastica',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quadgentics',
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
    <html lang="en" className={`dark antialiased ${inter.variable} ${raleway.variable} ${lastica.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased" >
        <div className="relative flex min-h-screen flex-col">
          <SmoothScroll>
            <Header />
             <ChatWidget/>
            <div className="flex-1 ">{children}</div>
          </SmoothScroll>
        </div>
      </body>
    </html>
  )
}
