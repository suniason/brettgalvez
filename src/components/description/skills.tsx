import React from 'react'
import { SiTypescript, SiJavascript, SiPython,  SiCss3, SiRust, SiGit, SiReact , SiNextdotjs, SiExpress, SiTailwindcss, SiSpringboot, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SkillItem from './skillitem';

const Skills:React.FC = () => {

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
        <div>
            <div className='text-text-700 text-7xl font-extrabold'>SKILLS</div>
            <div className='flex-col flex'>
                <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 p-5'>
                    {items.map((val, index)=>(
                        <li key={index} className='flex-1 flex flex-col items-center m-3 p-6'>
                        <SkillItem icon={val.icon} name={val.name}/>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Skills
