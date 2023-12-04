import React, { useState } from 'react'
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter,  } from "react-icons/si";
import { FaRegCopy } from "react-icons/fa";
import ContactForm from './form';

const Contact:React.FC = () => {
    const [mailhovered, setMailhovered] = useState(false)
    return (
    <div className='text-text-700 min-h-screen flex flex-col justify-center'>
        <div className='flex flex-col items-center text-center'>
            <div className='text-5xl font-bold'>Connect With Me</div>
        </div>
        <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-8/12 mx-3 my-5 text-center text-lg'>
                Feel free to reach out to me through the following channels. I'm always open to new opportunities, collaborations, or just a friendly conversation.
                </div>                
                <div className='flex'>
                    <div className={`opacity-75 transition-all mx-1 p-1 outline outline-1 outline-accent-800 rounded-md hover:opacity-100 flex items-center bg-white`}
                    onMouseEnter={()=>setMailhovered(true)}
                    onMouseLeave={()=>setMailhovered(false)}
                    ><FaRegCopy size={20}/></div>
                    <div className='bg-white text-center py-2 px-5 rounded-md text-secondary-400
                    outline outline-1 outline-accent-800 w-80' 
                    >
                        <div className='mx-3 font-semibold'>
                            {mailhovered?'copy the mail address':'galvezbrett17@gmail.com'}
                        </div>
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
            </div>
            <div className='flex flex-col justify-center m-10'>
                <ContactForm/>
            </div>
        </div>
    </div>
    )
}

export default Contact
