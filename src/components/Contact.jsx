import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app you'd send to an API. Here we simulate success.
    setSent(true)
    setTimeout(() => setForm({ name: '', email: '', message: '' }), 300)
  }

  return (
    <div className="max-w-2xl">
      <h3 className="text-2xl font-bold mb-4">Contact</h3>
      <p className="mb-4 text-slate-600 dark:text-slate-300">Want to work together? Send a message.</p>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <label className="flex flex-col">
          <span className="text-sm">Name</span>
          <input required name="name" value={form.name} onChange={handleChange} className="mt-1 p-2 rounded bg-slate-100 dark:bg-slate-800" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm">Email</span>
          <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 p-2 rounded bg-slate-100 dark:bg-slate-800" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm">Message</span>
          <textarea required name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 p-2 rounded bg-slate-100 dark:bg-slate-800" />
        </label>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send</button>
          {sent && <span className="text-green-500">Message sent (simulated)</span>}
        </div>

        <div className="mt-4 flex gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="underline">Twitter</a>
        </div>
      </form>
    </div>
  )
}
