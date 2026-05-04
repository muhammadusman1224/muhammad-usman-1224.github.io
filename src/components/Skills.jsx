import React from 'react'
import skills from '../data/skills'

export default function Skills() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Skills</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Frontend</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            <li>React</li>
            <li>Tailwind</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Backend</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            <li>Node.js</li>
            <li>Express</li>
            <li>Databases</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Tools</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            <li>Git</li>
            <li>CI/CD</li>
            <li>Testing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
