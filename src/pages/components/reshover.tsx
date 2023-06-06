import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: JSX.Element
}

const ResHover: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default ResHover
