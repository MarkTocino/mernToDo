import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  weight:'600',
  subsets: ['latin'] })

export const metadata = {
  title: 'To Do Application',
  description: 'To Do Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
