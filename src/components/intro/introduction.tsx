import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { introbg } from '../../utils/variant'

import Cube from '../fun/cube'
import Identity from './identity'
import AboutMe from './aboutme'
import Preamble from './preamble'


const Introduction:React.FC = () => {
    const name = 'Brett Josef '
    const lname = 'Galvez'
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ['0 0.5', '1 1']
    })

    //introcontainerdiv
    const justifydisplay = useTransform(scrollY,[300, 600, 700, 2000],['start','start','center','center'])
    const textdisplay = useTransform(scrollY,[300, 500, 600, 700],['left','left','center','center',])

    //textcontainer
    const widthchange = useTransform(scrollY,[300, 500, 600, 650, 800],['65%', '80%', '100%', '90%', '80%', ])
    const heightchange = useTransform(scrollY,[300, 500, 600, 650, 800],['40vh', '65vh', '70vh', '100dvh', '80dvh'])
    const rounded = useTransform(scrollY,[ 600, 650, 800],[0, 20, 50])
    const top = useTransform(scrollY,[300, 500, 550,  800],['10vh','10vh','0','10vh'])
    const bgopacity = useTransform(scrollY,[300, 500, 600, 700],['#0a285c00', '#0a285c44', '#0a285caa', '#0a285cff'])

    const textwidth =  useTransform(scrollY,[300, 550, 700, 750],['100%','100%','75%', '65%'])
    
    //cube
    const cubedisplay = useTransform(scrollY,[300, 500, 600, 700],['flex','flex','none','none'])
    
    //ID
    const opacity = useTransform(scrollY,[300, 500, 600, 700],[0, 0, 0.5, 1])
    const imagedisplay =  useTransform(scrollY,[300, 500, 650, 700],['none','none','flex','flex'])

    //preamble
    const preambledisplay =  useTransform(scrollY,[300, 600, 700, 800],['flex','flex','none','none'])
    const texthide = useTransform(scrollY,[300, 500, 600, 700],[1, 0.5, 0, 0])
    
    //about
    const aboutdisplay =  useTransform(scrollY,[300, 500, 650, 800],['none','none','none','flex'])
    const textreveal =  useTransform(scrollY,[300, 650, 700, 750],[0,0,0.5,1])
    
    return (
        <motion.div style={{ textAlign: textdisplay, justifyContent:justifydisplay}} 
        className='h-[250dvh] flex items-start'>
            <motion.div variants={introbg} initial="hidden" animate="visible" 
            style={{width: widthchange, height: heightchange, top,  borderRadius:rounded, backgroundColor:bgopacity}} ref={ref}
            className='sticky w-8/12 flex flex-col justify-center items-center p-4'>
                <motion.div style={{opacity, display:imagedisplay}} className='w-40 h-40'>
                    <img src="IDPic.svg" alt="ID" className='rounded-full'/>
                </motion.div>
                <motion.div className='flex flex-col items-center w-full'>
                    <Identity name={name} lname={lname}/>
                </motion.div>
                <motion.div style={{width:textwidth, opacity:texthide, display:preambledisplay}} className='flex flex-col items-center'>
                    <Preamble/>
                </motion.div>
                <motion.div style={{opacity:textreveal, display:aboutdisplay}}>
                    <AboutMe/>
                </motion.div>
            </motion.div>
            <motion.div style={{display: cubedisplay}} className='w-4/12 flex items-center justify-center'>
                <Cube/>
            </motion.div>
        </motion.div>
    )
}

export default Introduction
