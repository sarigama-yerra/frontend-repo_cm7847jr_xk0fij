import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ filter: 'hue-rotate(0deg)' }}
          animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="h-px w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} HydraData. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#home" className="transition hover:text-slate-900">Home</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#technology" className="transition hover:text-slate-900">Technology</a>
            <a href="#whitepaper" className="transition hover:text-slate-900">Whitepaper</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
