import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileDown, Globe } from 'lucide-react'

export default function Whitepaper() {
  const [lang, setLang] = useState('EN')
  const toggle = () => setLang((l) => (l === 'EN' ? 'ID' : 'EN'))

  const content = {
    EN: {
      title: 'Whitepaper',
      version: 'Version 1.0',
      links: [
        { label: 'English', href: 'https://example.com/hydradata-whitepaper-en.pdf' },
        { label: 'Bahasa Indonesia', href: 'https://example.com/hydradata-whitepaper-id.pdf' }
      ]
    },
    ID: {
      title: 'Dokumen Teknis',
      version: 'Versi 1.0',
      links: [
        { label: 'Bahasa Indonesia', href: 'https://example.com/hydradata-whitepaper-id.pdf' },
        { label: 'Inggris', href: 'https://example.com/hydradata-whitepaper-en.pdf' }
      ]
    }
  }

  const c = content[lang]

  return (
    <section id="whitepaper" className="relative bg-gradient-to-b from-violet-50 to-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-8 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-20 bottom-6 h-56 w-56 rounded-full bg-violet-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800"
          >
            {c.title}
          </motion.h2>
          <button onClick={toggle} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-white/70 px-4 py-2 text-cyan-800 shadow-sm backdrop-blur-sm transition hover:bg-white">
            <Globe className="h-4 w-4" /> {lang === 'EN' ? 'EN / ID' : 'ID / EN'}
          </button>
        </div>

        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
          <span className="relative inline-flex items-center">
            <span className="absolute -left-4 h-2 w-2 animate-ping rounded-full bg-cyan-500" />
            <span className="-ml-4 h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          {c.version}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {c.links.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/50 to-violet-200/50" />
              </div>
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{item.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">Download the latest PDF</p>
                </div>
                <div className="rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 p-3 text-white shadow-lg transition-transform group-hover:-translate-y-0.5">
                  <FileDown className="h-5 w-5" />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-3xl bg-white/60 shadow-2xl blur-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
