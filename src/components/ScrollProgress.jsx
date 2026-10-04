import { useScroll, motion } from 'motion/react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="scroll-progress" style={{ scaleY: scrollYProgress }} />
}