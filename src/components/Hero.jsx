import React from 'react'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'

export default function Hero() {
  const typed = useTypewriter(['Software Engineer', 'Frontend Developer', 'React Enthusiast'], 120)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Muhammad Usman
        </motion.h1>

        <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          {typed}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-xl">
          I build accessible, performant web applications with delightful user experiences. I focus on React, modern CSS, and pragmatic engineering.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-95">Contact</a>
          <a href="#projects" className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-md">View Projects</a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-800">Download Resume</a>
        </motion.div>
      </div>

      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35 }} className="mx-auto">
        <div className="w-64 h-64 rounded-2xl bg-gradient-to-tr from-primary to-accent shadow-lg flex items-center justify-center text-white">
          <div className="text-center px-4">
            <p className="font-semibold">Design-minded Engineer</p>
            <p className="text-sm mt-2">I craft interfaces and engineer the code that powers them.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
