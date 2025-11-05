import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const typingPhrases = [
  'Student',
  'AI Builder',
  'Future Innovator',
]

function useTypingText(phrases, speed = 90, pause = 1200) {
  const items = useMemo(() => phrases, [phrases])
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = items[index % items.length]
    const step = () => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setDeleting(true)
          return setTimeout(step, pause)
        }
      } else {
        setText(current.slice(0, Math.max(0, text.length - 1)))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % items.length)
        }
      }
      const nextDelay = deleting ? speed * 0.6 : speed
      timer = setTimeout(step, nextDelay)
    }

    let timer = setTimeout(step, speed)
    return () => clearTimeout(timer)
  }, [deleting, index, items, pause, speed, text.length])

  return text
}

export default function Hero() {
  const typed = useTypingText(typingPhrases)

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient overlay to improve contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950" />
      </div>

      {/* Floating orbs for subtle depth */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-sm text-cyan-300 ring-1 ring-white/10 backdrop-blur">
            Hi, I’m Shravan 👋
          </span>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Building the future with curiosity and code
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I’m a motivated student from India, exploring AI, automation, and entrepreneurship while preparing for JEE Advanced. I love crafting systems, learning fast, and turning ideas into real, useful products.
          </p>

          <div className="mx-auto flex max-w-md flex-col items-center gap-3">
            <div className="text-cyan-300">
              <span className="font-medium">Student • AI Builder • Future Innovator</span>
            </div>
            <div className="text-sm text-slate-400">
              <span className="text-slate-200">{typed}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </motion.div>

        {/* Quote / mantra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 w-full max-w-2xl"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            “Think big, start small, grow exponentially.”
          </div>
        </motion.div>
      </div>
    </section>
  )
}
