import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { box, fly } from '../../utils/variant'

interface RevealProps{
    children: React.ReactNode
}

const Reveal:React.FC<RevealProps> = ({children}) => {
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
        <div ref={revealref} className='relative overflow-hidden p-2'>
            <motion.div initial='hidden' variants={fly} animate={controls}>
                {children}
            </motion.div>
            <motion.div initial='hidden' animate={slidecontrols}  variants={box} className='absolute top-1 bottom-1  left-0 right-0 bg-accent-900 z-100'/>
        </div>
    )
}

export default Reveal
