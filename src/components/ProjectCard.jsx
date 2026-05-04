import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ translateY: -6, boxShadow: '0 12px 30px rgba(2,6,23,0.2)' }}
      className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
        <div className="text-sm text-slate-500">{project.year}</div>
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>)}
      </div>

      <div className="flex gap-3">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-sm underline">GitHub</a>
        <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm underline">Live demo</a>
      </div>
    </motion.article>
  )
}
