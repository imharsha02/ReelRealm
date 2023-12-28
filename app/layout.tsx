import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template:'%s | Shows-I-Watch',
    default:'Shows I watch'
  },
  description: 'A list of movies I watched',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='w-full'>
      <body className={inter.className}>
        <div className='w-screen mx-auto md:w-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
