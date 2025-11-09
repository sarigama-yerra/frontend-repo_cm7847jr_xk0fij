import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Network, Leaf } from 'lucide-react'

const techs = [
  {
    icon: Cpu,
    title: 'Quantum-Resistant Core',
    desc: 'Lattice-based cryptography, secure key exchange, and post-quantum signatures safeguard data flows.'
  },
  {
    icon: Network,
    title: 'Decentralized Infrastructure',
    desc: 'Blockchain-backed coordination ensures integrity, transparency, and self-healing operations.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Architecture',
    desc: 'Optimized workload placement, liquid cooling, and renewables integration cut emissions.'
  }
]

export default function Technology() {
  useEffect(() => {
    // Emit light pulses on cards via CSS class toggling
    const pulse = () => {
      document.querySelectorAll('.tech-card').forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('ring-2', 'ring-cyan-400/60')
          setTimeout(() => el.classList.remove('ring-2', 'ring-cyan-400/60'), 600)
        }, i * 200)
      })
    }
    const id = setInterval(pulse, 4000)
    pulse()
    return () => clearInterval(id)
  }, [])

  return (
    <section id="technology" className="relative overflow-hidden bg-gradient-to-b from-cyan-50/50 to-violet-50 py-20">
      {/* Animated data lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -50 ${120 + i * 100} C 300 ${40 + i * 100}, 900 ${200 + i * 100}, 1250 ${120 + i * 100}`}
            stroke="url(#g1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 + i * 0.2, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-slate-800"
        >
          Technology
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {techs.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="tech-card group relative rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 to-violet-200/40" />
              </div>
              <t.icon className="h-8 w-8 text-cyan-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{t.title}</h3>
              <p className="mt-2 text-slate-600">{t.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-200 via-transparent to-violet-200" />
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
                Live
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
