'use client'
import Loading from '@/components/loading'
import Navbar from '@/components/navbar'
import { Skeleton } from '@nextui-org/react'
import { Suspense } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-full flex-col">
      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[72px] rounded-lg bg-default-300"></div>
          </Skeleton>
        }
      >
        <Navbar />
      </Suspense>
      <div className="mx-auto w-full max-w-[2560px] px-4 pt-4 sm:px-8 2xl:px-16">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  )
}

export default Layout
