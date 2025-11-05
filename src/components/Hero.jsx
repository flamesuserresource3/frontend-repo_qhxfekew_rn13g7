import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
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
          className="space-y-6"
        >
          {/* Bigger, bolder intro */}
          <h1 className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-5xl font-semibold tracking-tight text-transparent drop-shadow sm:text-7xl">
            Hi, I’m Shravan 👋
          </h1>

          {/* Static subheading */}
          <p className="text-lg text-cyan-300 sm:text-xl">Student • AI Builder • Future Innovator</p>

          {/* Bio */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I’m a motivated student from India, exploring AI, automation, and entrepreneurship while preparing for JEE Advanced. I love crafting systems, learning fast, and turning ideas into real, useful products.
          </p>
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
