
import React, { useRef } from 'react'
import { RiExternalLinkLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from 'framer-motion';
interface ItemProps{
    name: string
    initial: string
    videopath: string
    description: string
    github: string
    link: string
    tech: string
    baseformat: boolean
}

const ProjectItem:React.FC<ItemProps> = ({name, initial, videopath, description, github, link, tech, baseformat}) => {
    const projectref = useRef<HTMLDivElement|null>(null)
    const scrollref = useRef<HTMLDivElement|null>(null)
    const {scrollYProgress : projectprogress} = useScroll({
        target: projectref,
        offset: ["start end", "end end"]
    })

    const {scrollYProgress : scrollprogress} = useScroll({
        target: scrollref,
        offset: ["start start", "end end"]
    })

        //container
        const textwidth = useTransform(scrollprogress,[0.1, 0.5, 0.8],['100%', '80%', '60%'])
        const textscale = useTransform(scrollprogress,[0.5, 0.6, 0.8],[1, 0.95, 0.9])


    return (
        <motion.div ref={scrollref}  className='h-[250dvh] flex items-start'>
        <motion.div ref={projectref} style={{scale: projectprogress, opacity:projectprogress}}
        className='sticky flex flex-col justify-center p-4 top-0 min-h-screen'>
                <div className='text-5xl font-bold flex items-center'>
                        {name}
                </div>
                <div className='flex py-3 '>
                <motion.div style={{scale:textscale,width:textwidth}} className={`p-10 flex flex-col justify-center  w-full`}>
                    <div className='text-xl my-4 leading-relaxed'>
                        {description}
                    </div>
                    <div className='flex text-accent-600 mt-12 mb-4'>
                        <a href={github} target='_blank' rel="noreferrer" className='flex items-center underline '>
                            <div>Github</div>
                            <RiExternalLinkLine />
                        </a>
                        <a href={link} target='_blank' rel="noreferrer" className='flex items-center underline mx-3'>
                            <div>Site</div>
                            <RiExternalLinkLine />
                        </a>
                    </div>
                    <div className='text-lg my-4'>
                        {tech}
                    </div>
                </motion.div>
                <motion.div className={`${!baseformat?"order-first":""} w-full flex justify-center items-center p-2`}>
                    <div className={` card relative w-full flex justify-center items-center p-2 group`}>
                        <div className='wrapper absolute transition-all duration-300 '>
                            <video src={videopath} autoPlay loop muted controls={false} className='w-full p-2'>
                            </video>
                        </div>
                        <div className='absolute applogo z-10 flex w-full justify-center'>
                            <img src={initial} alt={initial} className='h-[40vh] '/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
        </motion.div>
    )
}

export default ProjectItem