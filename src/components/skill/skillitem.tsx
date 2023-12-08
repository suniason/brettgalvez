import React from 'react'
import { IconType } from 'react-icons/lib'
import {motion} from 'framer-motion'
// import { iconreveal, text } from '../../utils/variant'

interface ItemProps{
    icon: IconType
    name: string
}

const SkillItem:React.FC<ItemProps> = ({icon, name}) => {
    
    const IconComponent = icon;
    return (
        <div className='flex flex-col items-center text-secondary-700'>
            <motion.div><IconComponent size={50}/></motion.div>
            <motion.div className='text-base'>
                {name}
            </motion.div>
        </div>
    )
}

export default SkillItem
