import { Spinner } from '@nextui-org/react'

const Loading = () => {
  return (
    <div className="to-main-white fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-300 opacity-50">
      <Spinner />
    </div>
  )
}

export default Loading
