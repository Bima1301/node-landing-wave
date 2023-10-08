import Navbar from './components/molecules/navbar'
import Hero from './components/organism/hero'
import HowWork from './components/organism/howWork'
import Produk from './components/organism/produk'
import Testimoni from './components/organism/testimoni'
import Work from './components/organism/work'

export default function Home() {
  return (
    <main className='min-w-full min-h-screen bg-black text-white'>
      <Navbar />
      <Hero />
      <Produk />
      <Testimoni />
      <Work />
      <HowWork />
    </main>
  )
}
