import Navbar from './components/molecules/navbar'
import Hero from './components/organism/hero'
import HowWork from './components/organism/howWork'
import OfferingProduct from './components/organism/offeringProduct'
import Produk from './components/organism/produk'
import Service from './components/organism/service'
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
      <Service />
      <OfferingProduct />
    </main>
  )
}
