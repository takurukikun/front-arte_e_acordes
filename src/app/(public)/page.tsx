import Image from "next/image";
import logo from '@/assets/images/logo.png'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'>

      <Image src={logo} alt='Logo' width={200} height={200} />
      <h1 className='text-6xl font-bold'>Artes e Acordes</h1>
      </div>
    </main>
  );
}
