import Loading from '@/components/loading'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Providers } from './providers'

import './globals.css'

const font = Montserrat({ weight: '400', subsets: ['latin'] })

const APP_NAME = 'Artes e Acordes'
const APP_TITLE_TEMPLATE = 'Artes e Acordes | %s'
const APP_DESCRIPTION = 'Associação de Artes e Acordes'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DESCRIPTION,
    template: APP_TITLE_TEMPLATE,
  },
  icons: {
    apple: '/assets/images/logo.png',
  },
  description: APP_DESCRIPTION,
}

export const viewport: Viewport = {
  themeColor: '#222',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={font.className}>
        <Providers>
          <main className="bg-background text-foreground">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
