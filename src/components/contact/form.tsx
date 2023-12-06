import React from 'react'

const ContactForm:React.FC = () => {
    const location = window.location.href
    return (
        <>
            <form action="https://formsubmit.io/send/cf2d80a1-8acb-49e3-ba55-c2063fa95267" method='POST'>
                <input name="_redirect" type="hidden" id="name" value={location}/>
                <label htmlFor="name" className='m-1 font-semibold'>Name</label>
                <input type="text" id='name' name='name' className='p-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md'/>
                <label htmlFor="email" className='m-1  font-semibold'>Email</label>
                <input type="email" id='email' name='email' className='p-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md'/>
                <label htmlFor="message" className='m-1  font-semibold'>Message</label>
                <textarea id='message' name='message' className='py-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md' rows={6} style={{resize:"none"}}/>
                <input name="_formsubmit_id" type="text" className='hidden'/>
                <button type='submit' className='w-full bg-secondary-700 text-text-100 my-2 p-1 rounded-md font-bold'>SEND</button>
            </form>
        </>
    )
}

export default ContactForm
