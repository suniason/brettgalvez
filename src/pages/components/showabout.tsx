import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const ShowAbout: React.FC<Props> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const controls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      slideControls.start('visible')
    }
    if (!isInView) {
      controls.start('hidden')
      slideControls.start('hidden')
    }
  }, [isInView, controls, slideControls])

  return (
    <div ref={ref} className='relative overflow-hidden'>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        animate={controls}
        transition={{ delay: 0.15, duration: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className='absolute top-4 bottom-4 left-0 right-0 bg-[#0086D5] z-[111]'
      ></motion.div>
    </div>
  )
}

export default ShowAbout
