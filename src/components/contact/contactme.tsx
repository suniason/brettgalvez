import React, { useState } from 'react'
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter,  } from "react-icons/si";
import { FaRegCopy } from "react-icons/fa";
import ContactForm from './form';
import Show from '../animation/show';


const Contact:React.FC = () => {
    const [mailhovered, setMailhovered] = useState(false)

    const copyClicked = () =>{
        navigator.clipboard.writeText("galvezbrett17@gmail.com");
    }

    return (    
    <div className='flex justify-center w-full'>
        <div className='text-text-700 min-h-screen flex flex-col justify-center md:w-9/12'>
                <div className='flex flex-col items-center text-center'>
                    <div className='text-5xl font-bold'>
                        <Show>Connect With Me</Show>
                    </div>
                </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                    <Show>
                    <div className='w-full mx-3 my-8 text-center text-lg flex justify-center'>
                        <div className='w-8/12'>
                        Feel free to reach out to me through the following channels. I'm always open to new opportunities, collaborations, or just a friendly conversation.
                        </div>
                    </div>                
                    <div className='flex justify-center'>
                        <div className={`opacity-75 transition-all mx-1 p-1 outline outline-1 outline-accent-500 rounded-md hover:opacity-100 flex items-center bg-white text-secondary-500 cursor-pointer duration-400`}
                        onMouseEnter={()=>setMailhovered(true)}
                        onMouseLeave={()=>setMailhovered(false)}
                        onClick={copyClicked}
                        ><FaRegCopy size={20}/></div>
                        <div className='bg-white hover:bg-background-900 text-center py-2 px-5 rounded-md text-secondary-500 transition-all duration-400 outline outline-1 outline-accent-800 w-80 cursor-pointer' 
                        >
                            <a href="mailto:galvezbrett17@gmail.com" target="_blank" rel="noreferrer" >
                            <div className='mx-3 font-semibold'>
                                {mailhovered?'copy the mail address':'galvezbrett17@gmail.com'}
                            </div>
                            </a>
                    </div>
                    </div>
                    <div>
                        <ul className='flex m-5 justify-center'>
                            <li className='m-5'><a href="https://www.facebook.com/brett.galvez.17" target='_blank' rel="noreferrer"><SiFacebook size={25}/></a></li>
                            <li className='m-5'><a href="https://www.instagram.com/br_.glvz/" target='_blank' rel="noreferrer"><SiInstagram size={25}/></a></li>
                            <li className='m-5'><a href="https://www.linkedin.com/in/brett-galvez-718b1324a/" target='_blank' rel="noreferrer"><SiLinkedin size={25}/></a></li>
                            <li className='m-5'><a href="https://twitter.com/bglvz17" target='_blank' rel="noreferrer"><SiTwitter size={25}/></a></li>
                        </ul>
                    </div>
                    </Show>
                </div>
                <div className='flex flex-col justify-center m-10'>
                    <Show>
                        <ContactForm/>
                    </Show>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact
