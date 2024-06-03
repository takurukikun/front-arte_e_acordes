'use client'

import { Button, cn, NextUIProvider } from '@nextui-org/react'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useRouter()
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }: any) => (
        // <Layout>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Ocorreu um erro</h1>
          <Button
            className="mt-4"
            onClick={() => {
              resetErrorBoundary()
            }}
          >
            Tentar novamente
          </Button>
        </div>
        // </Layout>
      )}
    >
      <NextUIProvider navigate={navigate.push}>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <ToastContainer
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            transition={Zoom}
            rtl={false}
            draggable
            theme="dark"
            toastClassName={cn(
              'min-h-10 cursor-pointer justify-between',
              'overflow-hidden rounded-[25px] bg-gray-900 p-3 text-white',
              'md:mb-2 mb-8 md:m-0 m-4',
            )}
          />
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </ErrorBoundary>
  )
}
