import React from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills'

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="md:col-span-1">
        <h3 className="text-2xl font-bold mb-3">About Me</h3>
        <p className="text-slate-600 dark:text-slate-300">
          I'm a Software Engineer focused on building accessible and performant web apps. I enjoy designing clean interfaces and writing well-tested code.
        </p>

        <div className="mt-4">
          <h4 className="font-semibold">Technologies</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.technologies.slice(0, 8).map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="md:col-span-2">
        <h4 className="text-xl font-semibold mb-3">Skills Overview</h4>
        <div className="grid gap-3">
          {skills.list.map(s => (
            <div key={s.title}>
              <div className="flex justify-between mb-1">
                <span>{s.title}</span>
                <span className="text-sm text-slate-500">{s.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded">
                <div className="h-3 bg-primary rounded" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
