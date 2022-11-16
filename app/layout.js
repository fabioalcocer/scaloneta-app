import { Roboto } from '@next/font/google'
import '../styles/globals.css'
import NavBar from './index/components/NavBar'

const roboto = Roboto({
  weight: ['300', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>App Scaloneta</title>
      </head>

      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
