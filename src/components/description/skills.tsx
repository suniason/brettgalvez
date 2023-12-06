import React, { useRef, useEffect } from 'react'
import { SiTypescript, SiJavascript, SiPython,  SiCss3, SiRust, SiGit, SiReact , SiNextdotjs, SiExpress, SiTailwindcss, SiSpringboot, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillItem from './skillitem';
import { motion, useInView, useAnimation } from 'framer-motion';
import { language, text } from '../../utils/variant';
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

    const items = [
        { icon: SiTypescript,name: "Typescript"},
        { icon: SiJavascript,name: "Javascript"},
        { icon: SiCss3,name: "CSS"},
        { icon: SiPython,name: "Python"},
        { icon: FaJava,name: "Java"},
        { icon: SiRust,name: "Rust"},
        { icon: SiGit,name: "Git"},
        { icon: SiSpringboot,name: "Springboot"},
        { icon: SiReact,name: "React"},
        { icon: SiNextdotjs,name: "Next"},
        { icon: SiExpress,name: "Express"},
        { icon: SiTailwindcss,name: "Tailwind"},
        { icon: SiMongodb,name: "MongoDB"},
    ]

    return (
        <div className='h-[100dvh] my-10 flex flex-col items-center'>
            <div className='w-9/12'>
                <div className='text-text-700 text-7xl font-extrabold'>
                        <div className='flex'>
                            <Reveal>SKILLS</Reveal>
                        </div>
                    </div>
                <motion.div variants={text} initial='hidden' animate={controls}
                className='text-text-700 text-5xl font-bold text-center'>Tech Toolkit</motion.div>
                    <motion.ul ref={skillref} variants={language} initial='hidden' animate={controls}
                    className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 p-3'>
                        {items.map((val, index)=>(
                            <li key={index} className='flex-1 flex flex-col items-center m-3 p-6'>
                            <SkillItem icon={val.icon} name={val.name}/>
                            </li>
                        ))}
                    </motion.ul>
            </div>
        </div>
    )
}

export default Skills
