import React from 'react'
import ShowAbout from './components/showabout'
import ShowHeader from './components/showheader'

const About: React.FC = () => {
  const skills = ['TypeScript', 'JavaScript', 'mySQL', 'MongoDB', 'CSS', 'Github', 'Python', 'Java']
  return (
    <div className='flex justify-center items-center min-h-[100vh] font-sans relative my-10'>
      <div className='w-[70%]'>
        <div className='mx-5'>
          <ShowHeader>
            <div className='text-[3.5rem] font-bold text-[#0086D5]'>ABOUT</div>
          </ShowHeader>
          <div className='md:grid md:grid-cols-[55%_45%]'>
            <ShowAbout>
              <div className='text-[1.5rem] mr-10 mt-10 text-justify'>
                With a passion for technology and a strong foundation in coding, data structures,
                and problem-solving, I have honed my skills throughout my university experience.
                Engaging in team-based projects, I have successfully led and contributed to the
                development of various end products.
              </div>
            </ShowAbout>
            <ShowAbout>
              <div className='md:mx-5'>
                <div className='text-[2.3rem] font-bold my-10'>Skills</div>
                <div className='grid grid-cols-3 mt-10 gap-5 text-[1rem]'>
                  {skills?.map((e, i) => (
                    <div key={i} className='bg-[#0086D5] text-center p-1 px-3 rounded-3xl'>
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
