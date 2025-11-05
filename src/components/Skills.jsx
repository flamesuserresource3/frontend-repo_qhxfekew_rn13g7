import { motion } from 'framer-motion'
import { Brain, Rocket, BadgeCheck } from 'lucide-react'

const skills = [
  { name: 'Python', level: 85 },
  { name: 'React', level: 75 },
  { name: 'AI Tools', level: 80 },
  { name: 'Video Editing', level: 70 },
  { name: 'Entrepreneurship', level: 65 },
  { name: 'Productivity Systems', level: 90 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-5 shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-cyan-300" />
                  <span className="font-medium">{s.name}</span>
                </div>
                <span className="text-sm text-slate-400">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6">
            <div className="mb-2 flex items-center gap-2 text-cyan-300">
              <Brain className="h-5 w-5" />
              <span className="font-medium">Learning Focus</span>
            </div>
            <p className="text-slate-300">
              Deepening fundamentals in math, physics, and computer science while applying AI tools to automate workflows and build useful products.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
            <div className="mb-2 flex items-center gap-2 text-purple-300">
              <Rocket className="h-5 w-5" />
              <span className="font-medium">Current Builds</span>
            </div>
            <p className="text-slate-300">
              AI automation experiments, digital systems for creators, and faceless content engines designed to scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
