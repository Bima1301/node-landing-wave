import Navbar from './components/molecules/navbar'
import Hero from './components/organism/hero'

export default function Home() {
  return (
    <main className='min-w-full min-h-screen bg-black'>
      <Navbar />
      <Hero />
      <div className='pt-20'>
      </div>
    </main>
  )
}
