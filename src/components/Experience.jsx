import React from 'react'
import experiences from '../data/experience'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div>
      <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold mb-6">Experience</motion.h3>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <motion.div key={exp.company} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="p-4 border rounded-lg bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{exp.role} — {exp.company}</h4>
                <div className="text-sm text-slate-500">{exp.duration}</div>
              </div>
              <div className="text-sm text-slate-400">{exp.location}</div>
            </div>

            <ul className="mt-3 list-disc list-inside text-slate-600 dark:text-slate-300">
              {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
