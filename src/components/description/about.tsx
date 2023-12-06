import React from 'react'
import Skills from './skills'
import AboutMe from './aboutme'

const About:React.FC = () => {
    return (
        <div className='m-10'>
            <AboutMe/>
            <Skills/>
        </div>
    )
}

export default About
