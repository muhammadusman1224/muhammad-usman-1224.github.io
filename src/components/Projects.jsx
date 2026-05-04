import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div>
      <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold mb-6">Projects</motion.h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
