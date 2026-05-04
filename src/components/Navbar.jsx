import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }

    const observer = new IntersectionObserver(handler, { root: null, threshold: 0.6 })
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
  }

  useEffect(() => {
    try {
      const pref = localStorage.getItem('theme')
      if (pref) {
        const isDark = pref === 'dark'
        setDark(isDark)
        document.documentElement.classList.toggle('dark', isDark)
      }
    } catch {}
  }, [])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed w-full z-40 backdrop-blur-sm ${scrolled ? 'bg-white/60 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'} `}
      aria-label="Primary navigation"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg">Muhammad Usman</a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-3 items-center" role="list">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md ${active === item.id ? 'bg-primary/10 text-primary' : 'text-slate-700 dark:text-slate-200 hover:text-primary'}`}
                  aria-current={active === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            {dark ? '☾' : '☀'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md">{dark ? '☾' : '☀'}</button>
          <MobileMenu navItems={navItems} active={active} />
        </div>
      </div>
    </motion.nav>
  )
}

function MobileMenu({ navItems, active }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button aria-expanded={open} onClick={() => setOpen(v => !v)} className="p-2 rounded-md">{open ? '✕' : '☰'}</button>

      {open && (
        <div className="fixed inset-0 bg-black/30 z-50" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-20 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 w-56" onClick={e => e.stopPropagation()}>
            <ul className="flex flex-col gap-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`block px-3 py-2 rounded ${active === item.id ? 'bg-primary/10 text-primary' : ''}`} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
