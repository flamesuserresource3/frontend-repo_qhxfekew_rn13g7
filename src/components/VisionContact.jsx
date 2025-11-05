import { motion } from 'framer-motion'
import { Rocket, Target, Github, Youtube, Linkedin, Mail } from 'lucide-react'

const goals = [
  {
    title: 'Crack JEE Advanced 2026',
    desc: 'Disciplined daily practice, strong fundamentals, and smart revision systems.',
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Get into Princeton',
    desc: 'Pursue opportunities that blend research, entrepreneurship, and impact.',
    accent: 'from-purple-500/20 to-pink-500/10',
  },
  {
    title: 'Build a billion-dollar AI company',
    desc: 'Create products that automate value at scale and empower millions.',
    accent: 'from-amber-500/20 to-orange-500/10',
  },
]

export default function VisionContact() {
  return (
    <section id="vision" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Goals & Vision
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {goals.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${g.accent} p-6 shadow-xl ring-1 ring-white/5`}
            >
              <div className="mb-3 flex items-center gap-2 text-cyan-300">
                {i === 0 && <Target className="h-5 w-5" />} 
                {i === 1 && <Rocket className="h-5 w-5" />} 
                {i === 2 && <Rocket className="h-5 w-5" />}
                <span className="font-medium">{g.title}</span>
              </div>
              <p className="text-slate-300">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Let’s connect</h3>
              <p className="mt-2 max-w-md text-slate-300">
                Let’s connect, collaborate, or build something amazing together 🚀
              </p>
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <Mail className="h-5 w-5 text-cyan-300" />
                <a href="mailto:shravankumars2357@gmail.com" className="hover:text-white">
                  shravankumars2357@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-end justify-start sm:justify-end">
              <div className="flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4 text-slate-300 transition group-hover:text-white" />
                  GitHub
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Youtube className="h-4 w-4 text-slate-300 transition group-hover:text-white" />
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4 text-slate-300 transition group-hover:text-white" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
