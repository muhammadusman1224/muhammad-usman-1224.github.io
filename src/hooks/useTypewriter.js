import { useEffect, useState } from 'react'

export default function useTypewriter(words = [], speed = 120) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < words.length) {
        if (subIndex === words[index].length + 1 && !reverse) {
          setReverse(true)
          return
        }
        if (reverse && subIndex === 0) {
          setReverse(false)
          setIndex((i) => (i + 1) % words.length)
          return
        }

        setSubIndex((s) => s + (reverse ? -1 : 1))
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, speed])

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(id)
  }, [])

  return `${words[index].substring(0, subIndex)}${blink ? '|' : ''}`
}
