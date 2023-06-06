import React from 'react'
import Reveal from './components/reveal'

const Introduction: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] font-sans relative my-10'>
      <div className='z-[10] w-[70%]'>
        <Reveal>
          <div className='text-[3rem]'>Hello there!!! I&apos;m</div>
        </Reveal>
        <Reveal>
          <div className='text-[6rem] font-bold p-0 m-0'>
            Brett Josef
            <span className='text-[#0086D5]'> Galvez</span>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Introduction
