import Navbar from './components/molecules/navbar'
import Hero from './components/organism/hero'
import Produk from './components/organism/produk'
import Testimoni from './components/organism/testimoni'
import Work from './components/organism/work'

export default function Home() {
  return (
    <main className='min-w-full min-h-screen bg-black'>
      <Navbar />
      <Hero />
      <Produk />
      <Testimoni />
      <Work />
      <Produk />
      {/* <Hero /> */}
    </main>
  )
}
