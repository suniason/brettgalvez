import { motion } from 'framer-motion'
import React from 'react'
import { introbg } from '../../utils/variant'

import Cube from '../fun/cube'
import Identity from './identity'

const Introduction:React.FC = () => {
    const name = 'Brett Josef '
    const lname = 'Galvez'
    
    return (
        <div className='relative flex h-[90dvh] w-full items-center overflow-hidden'>
            <motion.div variants={introbg} initial="hidden" animate="visible" 
            className='w-8/12 flex flex-col justify-center items-center bg-background-300 p-4'>
                <Identity name={name} lname={lname}/>
            </motion.div>
            <div className='w-4/12 flex items-center justify-center'>
                <Cube/>
            </div>
        </div>
    )
}

export default Introduction
