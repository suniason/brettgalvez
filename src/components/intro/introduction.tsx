import { motion } from 'framer-motion'
import React from 'react'
import { letter, sentence } from './variant'
import Preamble from './preamble'

const Introduction:React.FC = () => {
    const name = 'Brett Josef '
    const lname = 'Galvez'
    
    return (
        <div className='h-[85dvh] w-8/12 flex flex-col justify-center'>
            <motion.div variants={sentence} initial="hidden" animate="visible" 
            className='mx-4 text-7xl font-bold'>
                {name.split("").map((char, index)=>{
                    return(
                        <motion.div key={char+index} variants={letter} className='inline text-text-700'>
                            {char}
                        </motion.div>
                    )
                })}
                {lname.split("").map((char, index)=>{
                    return(
                        <motion.div key={char+index} variants={letter} className='inline text-secondary-600'>
                            {char}
                        </motion.div>
                    )
                })}
            </motion.div>
            <Preamble/>
        </div>
    )
}

export default Introduction
