import Navbar from './components/molecules/navbar'
import Hero from './components/organism/hero'
import Produk from './components/organism/produk'

export default function Home() {
  return (
    <main className='min-w-full min-h-screen bg-black'>
      <Navbar />
      <Hero />
      <Produk />
      {/* <Hero /> */}
    </main>
  )
}
