import React from 'react'
import { letter, sentence } from '../../utils/variant'
import { motion} from 'framer-motion'

interface IdentityProps{
    name: string
    lname: string
}

const Identity:React.FC<IdentityProps> = ({name, lname}) => {
    return (
            <motion.div variants={sentence} initial="hidden" animate="visible" 
                className='text-4xl md:text-7xl font-bold md:w-9/12 text-center'>
                    {name.split("").map((char, index)=>{
                        return(
                            <motion.div key={char+index} variants={letter} className='inline text-text-800'>
                                {char}
                            </motion.div>
                        )
                    })}
                    {lname.split("").map((char, index)=>{
                        return(
                            <motion.div key={char+index} variants={letter} className='inline text-secondary-700'>
                                {char}
                            </motion.div>
                        )
                    })}
            </motion.div>
    )
}

export default Identity
