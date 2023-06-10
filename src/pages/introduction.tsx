import React from 'react'
import Reveal from './components/reveal'

const Introduction: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] font-sans relative md:my-10'>
      <div className='z-[10] md:w-[70%] w-[85%]'>
        <Reveal>
          <div className='md:text-[3rem] text-[1.75rem] md:text-left text-center'>
            Hello there!!! I&apos;m
          </div>
        </Reveal>
        <Reveal>
          <div className='md:text-[6rem] text-[4rem] md:text-left text-center font-bold p-0 m-0'>
            Brett Josef
            <span className='text-[#0086D5]'> Galvez</span>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Introduction
