import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Whitepaper from './components/Whitepaper'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-white text-slate-800">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-700 to-violet-700">HydraData</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#technology" className="transition hover:text-slate-900">Technology</a>
            <a href="#whitepaper" className="transition hover:text-slate-900">Whitepaper</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Technology />
        <Whitepaper />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
