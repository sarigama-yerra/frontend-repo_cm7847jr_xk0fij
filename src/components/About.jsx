import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Sparkles, Leaf } from 'lucide-react'

export default function About() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])

  const features = [
    {
      icon: Shield,
      title: 'Security',
      desc: 'Post-quantum cryptography and blockchain-backed integrity keep data safe against next‑gen threats.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      desc: 'Cutting-edge research turned into practical infrastructure with fluid, scalable orchestration.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      desc: 'Energy-aware design and smart cooling reduce footprint without compromising performance.'
    }
  ]

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white to-cyan-50/50 py-20">
      {/* Parallax glow shapes */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-violet-300/30 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-slate-800"
        >
          Our Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-700"
        >
          HydraData is building a living, breathing data network. We blend quantum‑resistant cryptography with decentralized coordination so your infrastructure is verifiable, resilient, and future‑proof.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/0 via-white/0 to-violet-200/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <div className="relative">
                <f.icon className="h-8 w-8 text-cyan-700 drop-shadow" />
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-slate-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
