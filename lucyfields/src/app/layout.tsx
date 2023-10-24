import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Context from "../../context/context"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucy Fields',
  description: 'Lucy Fields personal site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </Context>
    </html>
  )
}
