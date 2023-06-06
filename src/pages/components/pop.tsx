import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const Pop: React.FC<Props> = ({ children }) => {
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
    <div ref={ref} className='relative overflow-hidden'>
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        animate={controls}
        transition={{ delay: 0.1, duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Pop
