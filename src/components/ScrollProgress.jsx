import { useScroll } from 'motion/react'
import * as m from 'motion/react-m'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <m.div
      className="scroll-progress"
      style={{ scaleY: scrollYProgress }}
    />
  )
}