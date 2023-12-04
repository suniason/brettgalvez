import React from 'react'
import { RiExternalLinkLine } from "react-icons/ri";
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
    return (
        <div className=' m-5 flex justify-center flex-col'>
            <div className='text-5xl font-bold min-h-[25dvh] flex items-center'>{name}</div>
                <div className='grid grid-cols-2 py-3 min-h-[75dvh]'>
                <div className={`p-10 flex flex-col justify-center  `}>
                    <div className='text-xl my-4 leading-relaxed'>{description}</div>
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
                    <div className='text-lg my-4'>{tech}</div>
                </div>
                <div className={`${!baseformat?"order-first":""} card relative w-full flex justify-center items-center p-2 group`}>
                    <div className='wrapper absolute transition-all duration-300 '>
                        <video src={videopath} autoPlay loop muted controls={false} className='w-full p-2'>
                        </video>
                    </div>
                    <div className='absolute applogo z-10 flex w-full justify-center'>
                        <img src={initial} alt={initial} className='h-[40vh] '/>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default ProjectItem
