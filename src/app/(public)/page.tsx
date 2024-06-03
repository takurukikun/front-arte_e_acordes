import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import fundo from '@/assets/images/fundo-1.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      {/*<Image src={logo} alt="Logo" width={200} height={200} />200*/}
      {/*<h1 className="text-6xl font-bold">Artes e Acordes</h1>*/}

      <Image
        src={fundo}
        alt="Associação ARCOS"
        className="w-full"
        width={2048}
        height={200}
      />
    </div>
  )
}
