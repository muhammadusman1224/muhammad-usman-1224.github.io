import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="font-sans antialiased">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 md:px-8 lg:px-0">
            <section id="home" className="min-h-screen flex items-center">
              <Hero />
            </section>

            <section id="about" className="py-16">
              <About />
            </section>

            <section id="projects" className="py-16">
              <Projects />
            </section>

            <section id="experience" className="py-16">
              <Experience />
            </section>

            <section id="skills" className="py-16">
              <Skills />
            </section>

            <section id="contact" className="py-16">
              <Contact />
            </section>

            <Footer />
          </main>

          <ScrollToTop />
        </>
      )}
    </div>
  )
}
