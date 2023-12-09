import React, { useRef, useEffect } from 'react'
import { SiTypescript, SiJavascript, SiPython,  SiCss3, SiGit, SiReact , SiNextdotjs, SiExpress, SiTailwindcss, SiSpringboot,  SiFramer } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillItem from './skillitem';
import { motion, useInView, useAnimation } from 'framer-motion';
import { iconreveal, language } from '../../utils/variant';
import Reveal from '../animation/reveal';

const Skills:React.FC = () => {

    const skillref = useRef<HTMLUListElement | null>(null)
    const isInView = useInView(skillref,)
    const controls = useAnimation()
    useEffect(()=>{
        if(isInView){
            controls.start("visible")
        }
    },[isInView, controls])

    const items = {
        language:[
            { icon: SiTypescript,name: "Typescript"},
            { icon: SiJavascript,name: "Javascript"},
            { icon: FaJava,name: "Java"},
            { icon: SiPython,name: "Python"},
        ], 
        framerwork:[
            { icon: SiSpringboot,name: "Springboot"},
            { icon: SiReact,name: "React"},
            { icon: SiNextdotjs,name: "Next"},
            { icon: SiExpress,name: "Express"},
        ],
        design:[
            { icon: SiCss3,name: "CSS"},
            { icon: SiTailwindcss,name: "Tailwind"},
            { icon: SiFramer,name: "Framer"},
            { icon: SiGit,name: "Git"},
        ],
    }

    return (
        <div className='min-h-[100dvh] my-20 flex flex-col items-center'>
            <div className='w-11/12 md:w-7/12'>
                <div className='text-text-700 text-4xl md:text-7xl font-extrabold'>
                        <div className='flex'>
                            <Reveal>Tech Toolkit</Reveal>
                        </div>
                    </div>
                    <div className='text-white mt-10'>
                    <motion.ul ref={skillref} variants={language} initial='hidden' animate={controls}
                    className='grid grid-cols-2  md:grid-cols-4 gap-4'>
                        <motion.li variants={iconreveal} className='text-center col-span-2 bg-background-100 m-1 p-8 rounded-xl'>
                            <div className='grid grid-cols-2 gap-2'>
                                {items.language.map((val, index)=>(
                                    <SkillItem key={index} icon={val.icon} name={val.name}/>
                                    ))}
                            </div>
                            <div className='mt-5 text-lg font-bold'>Programming Languages</div>
                        </motion.li>
                        <motion.li variants={iconreveal} className='text-center col-span-2 bg-background-100 m-1 p-8 rounded-xl'>
                            <div  className='grid grid-cols-2 gap-2'>
                                {items.framerwork.map((val, index)=>(
                                    <SkillItem key={index} icon={val.icon} name={val.name}/>
                                    ))}
                            </div>
                            <div className='mt-5 text-lg font-bold'>Frameworks</div>
                        </motion.li>
                        <motion.li variants={iconreveal} className='text-center col-span-2 md:col-span-4 bg-background-100 m-1 p-8 rounded-xl'>
                            <div  className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                                {items.design.map((val, index)=>(
                                    <SkillItem key={index} icon={val.icon} name={val.name}/>
                                    ))}
                            </div>
                            <div className='mt-5 text-lg font-bold'>Design Tools & Version Control</div>
                        </motion.li>
                    </motion.ul>
                    </div>
            </div>
        </div>
    )
}

export default Skills
