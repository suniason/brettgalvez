import React from 'react'

interface ItemProps{
    name: string
    videopath: string
    description: string
    github: string
    link: string
    tech: string
}

const ProjectItem:React.FC<ItemProps> = ({name, videopath, description, github, link, tech}) => {
    return (
        <div>
            <div>My Projects</div>
            <div></div>
        </div>
    )
}

export default ProjectItem
