import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const containerRef = useRef(null)

  // Soft cursor glow that follows the mouse within the hero
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const glow = el.querySelector('#cursor-glow')
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (glow) {
        glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
      {/* Animated gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-violet-400/30 blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      </div>

      {/* Cursor glow */}
      <div id="cursor-glow" className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-cyan-300/25 to-violet-300/25 blur-2xl transition-transform" />

      {/* 3D Spline Scene */}
      <div className="relative mx-auto mt-12 h-[380px] w-full max-w-5xl rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-[0_10px_50px_rgba(59,130,246,0.25)]">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle top gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-10 text-center"
        >
          {/* Logo substitute with glow if image is unavailable */}
          <div className="mx-auto mb-5 inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 blur-md opacity-60" />
              <div className="relative rounded-xl bg-white px-3 py-1.5 text-sm font-semibold text-cyan-700 shadow-sm">
                HydraData
              </div>
            </div>
            <span className="text-sm text-slate-600">Post-Quantum Secure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-cyan-700 to-violet-700 bg-clip-text text-transparent">
            Quantum-Resistant Data Infrastructure
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-700">
            Revolutionizing data center security for the post-quantum era.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#technology" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 text-white shadow-lg transition hover:brightness-110">
              <span className="relative z-10 font-medium">Explore Technology</span>
            </a>
            <a href="#whitepaper" className="relative inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-white/70 px-6 py-3 text-cyan-800 shadow-sm backdrop-blur-sm transition hover:bg-white">
              <span className="font-medium">View Whitepaper</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-xs">Scroll</span>
            <span className="mt-2 h-10 w-[2px] animate-[bounce_1.2s_infinite] rounded-full bg-gradient-to-b from-cyan-500 to-violet-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
