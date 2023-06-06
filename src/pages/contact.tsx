import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import OnScroll from './components/onscroll'

const Contact: React.FC = () => {
  const mailRef = useRef<HTMLDivElement>(null)

  const onHoverIn = () => {
    if (mailRef.current) {
      mailRef.current.style.transition = 'color 0.2s ease-in-out'
      mailRef.current.style.color = '#0086D5'
    }
  }

  const onHoverOut = () => {
    setTimeout(() => {
      if (mailRef.current) {
        mailRef.current.style.transition = 'color 0.2s ease-in-out'
        mailRef.current.style.color = ''
      }
    }, 100)
  }

  const fbClicked = () => {
    window.open('https://www.facebook.com/brett.galvez.77', '_blank')
  }

  const phoneClicked = () => {
    navigator.clipboard.writeText('09369070194')
    alert(`Phone number copied`)
  }

  return (
    <div className='flex justify-center items-center h-[100vh] font-sans relative my-10 cursor-default'>
      <div className='text-center w-[70%] md:w-[50%]'>
        <OnScroll>
          <div>
            <div className='text-[4rem] font-bold'>
              <span className='text-[#0086D5]'>SEND ME A </span> MESSAGE
            </div>
            <div className='text-[1.5rem] my-3 text-justify'>
              I&apos;m excited to collaborate with you and transform your innovative ideas into
              reality. You can reach me through my{' '}
              <motion.span
                className='text-[#0086D5] font-semibold cursor-pointer'
                onClick={fbClicked}
                whileHover={{ textDecoration: 'underline', color: '#ffffff' }}
              >
                Facebook
              </motion.span>{' '}
              or{' '}
              <motion.span
                className='text-[#0086D5] font-semibold cursor-pointer'
                onClick={phoneClicked}
                whileHover={{ textDecoration: 'underline', color: '#ffffff' }}
              >
                Contactline
              </motion.span>
              . You can also connect with me through mail:{' '}
            </div>
            <div>
              <a href='mailto:galvezbrett17@gmail.com'>
                <span
                  ref={mailRef}
                  onMouseEnter={onHoverIn}
                  onMouseLeave={onHoverOut}
                  className='text-[1.5rem] font-bold cursor-pointer'
                >
                  galvezbrett17@gmail.com
                </span>
              </a>
            </div>
          </div>
        </OnScroll>
      </div>
    </div>
  )
}

export default Contact
