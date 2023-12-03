import React from 'react'
import { useConfigContext } from '../context/appcontext'
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"

interface Props{
    children: React.ReactNode
}

const Navbar:React.FC<Props> = ({children}) => {
    const {darkMode, setDarkMode} = useConfigContext()
    const handleClick = () =>{
        const link = document.createElement('a')
        link.href = '/Galvez_ResumeDesigned.pdf'
        link.setAttribute('download', 'brettgalvez.pdf')
        link.click()
    }

    return (
    <div className='w-full'>
        <div className='text-text-100 flex justify-between w-full items-center p-3'>
            <div>
                {darkMode?
                    <img src="/logo-nobg.png"  className='w-16 mx-4' alt="" />
                    :
                    <img src="/logo-bg.png" className='w-16 mx-4' alt="" />
                }
            </div>
            <ul className='flex items-center'>
                <li className='mx-4'>
                    <button 
                    className='text-text-800 outline outline-2 outline-primary-800 text-md px-6 py-1 hover:bg-primary-800 hover:text-text-400 transition-all duration-500 font-semibold' 
                    onClick={handleClick}>Download Resume</button>
                </li>
                <li className='mx-4 text-secondary-700'>
                    {darkMode?
                        <MdLightMode  onClick={()=>setDarkMode(false)} size={30}/>
                        :
                        <MdDarkMode  onClick={()=>setDarkMode(true)} size={30}/>
                    }
                </li>
            </ul>
        </div>
        <div>
            <div>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Navbar