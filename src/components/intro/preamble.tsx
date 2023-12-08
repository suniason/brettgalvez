import { motion } from 'framer-motion'
import React from 'react'
import { preambletext } from '../../utils/variant'

const Preamble:React.FC = () => {
    return (
        <motion.div variants={preambletext} initial="hidden" animate="visible"
         className='m-4 w-9/12 text-base md:text-xl text-text-800'>
            An aspiring <span className='text-accent-700 font-semibold text-2xl'>full-stack developer</span> turning ideas into code. I'm driven by a passion for innovation. Let's create something <span className='text-accent-700 font-semibold'>awesome!</span>
        </motion.div>
    )
}

export default Preamble
