import React from 'react'
import Card from './components/card'
import Pop from './components/pop'
import ShowHeader from './components/showheader'
import Image from 'next/image'
import Appear from './components/appear'

const Projects: React.FC = () => {
  const githubClicked = () => {
    window.open('https://github.com/suniason', '_blank')
  }

  const gitlabClicked = () => {
    window.open('https://gitlab.com/suniason', '_blank')
  }
  return (
    <div className='flex justify-center items-center min-h-[100vh] font-sans relative my-10'>
      <div className='w-[70%]'>
        <div className='mx-5'>
          <ShowHeader>
            <div className='text-[3.5rem] font-bold text-[#0086D5]'>PROJECTS</div>
          </ShowHeader>
          <div className='md:grid md:grid-cols-[50%_50%] gap-5 mt-10'>
            <Pop>
              <Card
                name='TravelGuide'
                image='/travelguide.svg'
                description='TravelGuide is a web application that enables users to create and share travel guides inspired by popular social media themes, facilitating knowledge sharing and learning among users. '
                langandtech={['Node', 'Typescript', 'React', 'Springboot', 'Java']}
                status='Ongoing'
              />
            </Pop>
            <Pop>
              <Card
                name='ChatXpert'
                image='/chatxpert.svg'
                description='ChatXpert is a web application that utilizes AI to provide efficient customer service,  enabling MSMEs to handle inquiries and support requests promptly while offering customers 24/7 immediate assistance.'
                langandtech={['ChatGPT_API', 'Typescript', 'Next', 'Express', 'MongoDB']}
                status='Ongoing'
              />
            </Pop>
            <Pop>
              <Card
                name='Java Server'
                image='/javaapi.svg'
                description='This Java server leverages the Spring Boot framework to enable the implementation of CRUD (Create, Read, Update, Delete) operations. The server processes request from users and returns the appropriate response.'
                langandtech={['Maven', 'Springboot', 'Java', 'JWT']}
                status='Ongoing'
              />
            </Pop>
            {/* <Pop>
              <Card
                name=''
                image=''
                description=''
                langandtech={[]}
                status=''
              />
            </Pop> */}
          </div>
          <Appear>
            <div className=' m-10  rounded-3xl'>
              <div className='text-[1.4rem] inline text-[#0086D5]'>Find out more here → </div>{' '}
              <div className='inline'>
                <Image
                  src='/github.svg'
                  width={40}
                  height={40}
                  alt='Github'
                  className='inline mx-2 cursor-pointer'
                  onClick={githubClicked}
                />
                <Image
                  src='/gitlab.svg'
                  width={40}
                  height={50}
                  alt='Gitlab'
                  className='inline mx-2 cursor-pointer'
                  onClick={gitlabClicked}
                />
              </div>
            </div>
          </Appear>
        </div>
      </div>
    </div>
  )
}

export default Projects
