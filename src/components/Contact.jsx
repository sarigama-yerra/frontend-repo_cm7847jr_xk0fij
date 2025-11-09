import { motion } from 'framer-motion'
import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-cyan-50 py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-10 h-32 w-32 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-44 w-44 rounded-full bg-violet-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-extrabold text-slate-800"
        >
          Get in Touch
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="text-sm text-slate-600">Name</span>
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 outline-none ring-cyan-400/60 focus:ring" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-600">Email</span>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 outline-none ring-cyan-400/60 focus:ring" placeholder="you@example.com" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-600">Message</span>
                <textarea rows="5" className="mt-1 w-full rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 outline-none ring-cyan-400/60 focus:ring" placeholder="How can we help?" />
              </label>
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg transition hover:brightness-110">
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-slate-800">Official Links</h3>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <a href="https://www.instagram.com/hydradata.id/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 transition hover:border-cyan-400/60">
                <div className="rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-2 text-white shadow-lg transition group-hover:scale-105">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-slate-900">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/hydra-data-4a567938b/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 transition hover:border-cyan-400/60">
                <div className="rounded-full bg-gradient-to-br from-sky-600 to-cyan-600 p-2 text-white shadow-lg transition group-hover:scale-105">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-slate-900">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@HydraData-id" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 transition hover:border-cyan-400/60">
                <div className="rounded-full bg-gradient-to-br from-rose-500 to-violet-600 p-2 text-white shadow-lg transition group-hover:scale-105">
                  <Youtube className="h-5 w-5" />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-slate-900">YouTube</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
