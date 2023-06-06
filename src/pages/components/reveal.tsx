import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const OnScroll: React.FC<Props> = ({ children }) => {
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
        variants={{ hidden: { y: '-100vh' }, visible: { y: 0 } }}
        initial='hidden'
        animate={controls}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default OnScroll
