import React from 'react'

const ContactForm:React.FC = () => {
    return (
        <>
            <form action="https://formsubmit.co/example.com" method='POST'>
                <div>
                    <div className='m-1 font-semibold'>Name</div>
                    <input type="text" className='p-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md'/>
                </div>
                <div>
                    <div className='m-1  font-semibold'>Email</div>
                    <input type="email" className='p-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md'/>
                </div>
                <div>
                    <div className='m-1  font-semibold'>Message</div>
                    <textarea className='py-1 px-2 w-full outline outline-1 outline-accent-700 rounded-md' rows={6} style={{resize:"none"}}/>
                </div>
                <button type='submit' className='w-full bg-secondary-700 text-text-100 my-2 p-1 rounded-md font-bold'>Send</button>
            </form>
        </>
    )
}

export default ContactForm
