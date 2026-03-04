import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className='text-zinc-100 bg-black p-4'>
      <Navbar />
      <div id='smooth-content'>
        <HomePage />
      </div>
    </div>
  )
}