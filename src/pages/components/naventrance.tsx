import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const NavEntrance: React.FC<Props> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    if (!isInView) {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className='pb-10'>
      <motion.div
        variants={{ hidden: { opacity: 0, y: -250 }, visible: { opacity: 1, y: 20 } }}
        initial='hidden'
        animate={controls}
        transition={{ delay: 0.2, duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default NavEntrance
