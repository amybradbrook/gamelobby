"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from './store'
import firebase from 'firebase'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body  className="bg-[url('./space.jpg')] bg-cover">{children}</body>
      </html>
    </Provider>
  )
}

//I got rid of metadata because I needed "use client" to get react to work. Hoping that didn't break anything?