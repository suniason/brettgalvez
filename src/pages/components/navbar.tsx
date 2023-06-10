import React from 'react'
import NavEntrance from './naventrance'
import NavHover from './navhover'
import ResHover from './reshover'
import { motion } from 'framer-motion'

export interface Navigation {
  clicked: (section: number) => void
}

const Navbar: React.FC<Navigation> = (prop: Navigation) => {
  return (
    <NavEntrance>
      <div className='flex justify-center items-center h-[10vh] w-full font-sans'>
        <div className='md:w-[70%] grid md:grid-cols-2 grid-rows-2'>
          <div className='flex flex-cols gap-10 md:justify-start justify-center mx-10'>
            <NavHover>
              <div onClick={() => prop.clicked(1)} className='cursor-pointer'>
                About
              </div>
            </NavHover>{' '}
            <NavHover>
              <div onClick={() => prop.clicked(2)} className='cursor-pointer'>
                Projects
              </div>
            </NavHover>{' '}
            <NavHover>
              <div onClick={() => prop.clicked(3)} className='cursor-pointer'>
                Contact
              </div>
            </NavHover>
          </div>
          <div className='flex md:justify-end justify-center'>
            <motion.div
              className='outline outline-[#0086D5] p-2 px-10 font-bold cursor-pointer relative text-[1rem]'
              whileHover={{ backgroundColor: '#0086D5' }}
              whileTap={{ backgroundColor: '#33B9D8', outlineColor: '#33B9D8' }}
            >
              Resume
            </motion.div>
          </div>
        </div>
      </div>
    </NavEntrance>
  )
}

export default Navbar
