import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (event) => setPoint({ x: event.clientX, y: event.clientY })
    const enter = (event) => {
      if (event.target.closest('a,button,[data-cursor]')) setHover(true)
    }
    const leave = (event) => {
      if (event.target.closest('a,button,[data-cursor]')) setHover(false)
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-ring"
        animate={{ x: point.x, y: point.y, scale: hover ? 1.7 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 34, mass: .22 }}
      />
      <motion.div
        className="cursor-core"
        animate={{ x: point.x, y: point.y, scale: hover ? .7 : 1 }}
        transition={{ type: 'spring', stiffness: 900, damping: 55, mass: .12 }}
      />
    </>
  )
}