"use client"
import './globals.css'
import { Montserrat } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import Navigation from './navigation'
const montserrat = Montserrat({ 
  weight:'600',
  subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextUIProvider>
          <Navigation />
        {children}
        </NextUIProvider>
        </body>
    </html>
  )
}
