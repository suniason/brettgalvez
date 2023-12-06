import React from 'react'
import ProjectItem from './projectitem'

const Projects:React.FC = () => {
    
    const projects=[
        {   
            name: "BRAMK (Business Resource Access through Modern Knowledge)",
            initial: "mascot.svg",
            videopath: "BRAMK.mp4",
            description: "An AI-powered customer support application that aims to help MSME automate ",
            github: "https://github.com/ainderew/cap-client",
            link: "https://www.bramk.tech/",
            tech: "MERN(MongoDB, Express, React-(Next), Node.js) - GPT API - Langchain", 
        },{   
            name: "Gourmet Quest",
            initial: "recipe.svg",
            videopath: "Recipe.mp4",
            description: "The Recipe Sharing DApp on the Solana blockchain that aims to redefine recipe discovery, connecting global food enthusiasts, home chefs, and experts in a secure and efficient decentralized platform.",
            github: "https://github.com/suniason/anchor-recipe-app",
            link: "https://anchor-recipe-app.vercel.app/",
            tech: "Anchor(Rust) - Next(Typescript)", 
        },{   
            name: "Notes App",
            initial: "notes.svg",
            videopath: "Notes.mp4",
            description: "The note app designed for simplicity. Quickly jot down your thoughts, create to-do lists, and organize your notes effortlessly. With an easy-to-use interface. An uncomplicated solution for effective note-taking.",
            github: "https://github.com/suniason/noteapp",
            link: "https://noteapp-sigma.vercel.app/",
            tech: "MERN(MongoDB, Express, React-(Next), Node.js)", 
        },
    ]

    return (
    <div className='flex justify-center'>
        <div className='min-h-[100dvh] text-text-700 w-9/12'>
            <div className='font-extrabold text-6xl'>PROJECTS</div>
            {projects.map((val, index)=>(
                <ProjectItem 
                    key={index}
                    initial={val.initial}
                    name={val.name}
                    videopath={val.videopath}
                    description={val.description}
                    github={val.github}
                    link={val.link}
                    tech={val.tech}
                    baseformat={index%2===0}
                />
                ))}
        </div>
    </div>
    )
}

export default Projects
