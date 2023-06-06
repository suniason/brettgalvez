import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const NavHover: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.3,
          originX: 0,
          color: '#0086D5'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default NavHover
