import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const quotes = [
  'Consistency beats intensity. Small daily steps compound into greatness.',
  'Automate the boring, amplify the creative.',
  'Systems build freedom. Focus creates leverage.',
  'Learn fast, iterate faster, stay curious forever.',
  'Your future is a product of your habits, not your hopes.'
]

function getRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length)
  return quotes[idx]
}

export default function About() {
  const quote = getRandomQuote()

  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
        >
          I’m Shravan Kumar — a curious learner and builder from India. I’m preparing for JEE Advanced while exploring AI automation, digital businesses, and faceless content creation. I enjoy designing systems that save time, experimenting with ideas, and turning them into real projects. I’m also gearing up for my future university applications to places like Princeton, and I’m excited by the idea of combining science, entrepreneurship, and creativity to make a meaningful impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-6 shadow-lg">
            <div className="mb-3 flex items-center gap-2 text-cyan-300">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">AI tip of the week</span>
            </div>
            <p className="text-slate-300">
              {quote}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-6 shadow-lg">
            <div className="mb-2 text-cyan-300">Philosophy</div>
            <p className="text-slate-300">“Think big, start small, grow exponentially.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
