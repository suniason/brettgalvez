import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { fly } from '../../utils/variant'

interface RevealProps{
    children: React.ReactNode
}

const Show:React.FC<RevealProps> = ({children}) => {
    const revealref = useRef(null)
    const isInView = useInView(revealref)
    const controls = useAnimation()
    const slidecontrols = useAnimation()

    useEffect(()=>{
        if(isInView){
            controls.start("visible")
            slidecontrols.start("visible")
        }
    },[isInView, controls, slidecontrols])
    
    return (
        <div ref={revealref} className='p-2'>
            <motion.div initial='hidden' variants={fly} animate={controls}>
                {children}
            </motion.div>
        </div>
    )
}

export default Show
