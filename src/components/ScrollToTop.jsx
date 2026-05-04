import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed right-6 bottom-6 bg-primary text-white p-3 rounded-full shadow-lg" aria-label="Scroll to top">
      ↑
    </button>
  )
}
