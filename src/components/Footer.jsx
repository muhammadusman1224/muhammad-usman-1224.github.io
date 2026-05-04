import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500">
      <div>© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</div>
      <div className="mt-2 flex items-center justify-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
