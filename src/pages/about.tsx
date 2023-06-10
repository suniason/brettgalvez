import React from 'react'
import ShowAbout from './components/showabout'
import ShowHeader from './components/showheader'

const About: React.FC = () => {
  const skills = ['TypeScript', 'JavaScript', 'mySQL', 'MongoDB', 'CSS', 'Github', 'Python', 'Java']
  return (
    <div className='flex justify-center items-center min-h-[100vh] font-sans relative my-10'>
      <div className='w-[80%] md:[90%] lg:w-[80%]'>
        <div className='mx-5'>
          <ShowHeader>
            <div className='md:text-[3.5rem] text-[2.5rem] font-bold text-[#0086D5]'>ABOUT</div>
          </ShowHeader>
          <div className='md:grid md:grid-cols-[55%_45%]'>
            <ShowAbout>
              <div className='md:text-[1.5rem] text-[1rem] mr-10 mt-10 text-justify'>
                With a passion for technology and a strong foundation in coding, data structures,
                and problem-solving, I have honed my skills throughout my university experience.
                Engaging in team-based projects, I have successfully led and contributed to the
                development of various end products.
              </div>
            </ShowAbout>
            <ShowAbout>
              <div className='md:mx-5'>
                <div className='md:text-[2.3rem] text-[1.6rem] font-bold my-10'>Skills</div>
                <div className='grid lg:grid-cols-3 grid-cols-2 mt-10 md:text-[1rem] text-[.8rem] gap-3'>
                  {skills?.map((e, i) => (
                    <div
                      key={i}
                      className='bg-[#0086D5] bg-contain text-center p-1 px-3 rounded-3xl'
                    >
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </ShowAbout>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
