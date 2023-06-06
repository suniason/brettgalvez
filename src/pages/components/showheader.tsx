import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const ShowHeader: React.FC<Props> = ({ children }) => {
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
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        variants={{
          hidden: { x: '150vw' },
          visible: { x: 0 }
        }}
        animate={controls}
        transition={{ delay: 0.2, duration: 1, type: 'spring' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ShowHeader
