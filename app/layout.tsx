import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable:'--font-poppins'  
  })

export const metadata: Metadata = {
  title: 'Eventoo',
  description: 'Eventoo is a application for managing events',
  icons:{
    icon:'https://images.unsplash.com/photo-1701378369225-793704f5186d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>

  )
}
