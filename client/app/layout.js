"use client"
import './globals.css'
import { Montserrat } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import Navigation from './navigation'
import { CartProvider } from './CartContext/CartContext'
const montserrat = Montserrat({ 
  weight:'600',
  subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
  <html lang="en">
      <CartProvider>
    <body className={montserrat.className}>
        <NextUIProvider>
          <Navigation />
          {children}
        </NextUIProvider>
    </body>
      </CartProvider>
  </html>
  )
}
