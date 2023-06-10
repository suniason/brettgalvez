import React from 'react'
import NavEntrance from './naventrance'
import NavHover from './navhover'
import { motion } from 'framer-motion'

export interface Navigation {
  clicked: (section: number) => void
}

const Navbar: React.FC<Navigation> = (prop: Navigation) => {
  return (
    <NavEntrance>
      <div className='flex justify-center items-center h-[10vh] w-full font-sans'>
        <div className='md:w-[70%] w-[85%] grid md:grid-cols-2 grid-cols-[60%_40%] md:text-[1rem]  text-[.8rem]'>
          <div className='flex flex-cols gap-10 md:justify-start justify-center md:mx-10'>
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
              className='outline outline-[#0086D5] md:p-2 p-1 md:px-10 px-5 font-bold cursor-pointer relative md:text-[1rem] text-[.8rem]'
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
