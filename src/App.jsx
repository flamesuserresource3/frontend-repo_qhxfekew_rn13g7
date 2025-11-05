import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import VisionContact from './components/VisionContact'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 ${show ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100 antialiased">
      <Hero />
      <About />
      <Skills />
      <VisionContact />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Shravan Kumar. Crafted with curiosity.
      </footer>
      <BackToTop />
    </div>
  )
}

export default App
