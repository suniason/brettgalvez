import React from 'react'
import { IconType } from 'react-icons/lib'
import { useConfigContext } from '../../context/appcontext'
import {motion} from 'framer-motion'
import { iconreveal, text } from '../../utils/variant'

interface ItemProps{
    icon: IconType
    name: string
}

const SkillItem:React.FC<ItemProps> = ({icon, name}) => {
    const {darkMode} = useConfigContext()
    
    const IconComponent = icon;
    return (
        <>
            <motion.div variants={iconreveal} ><IconComponent color={darkMode?'white':'#142d52'} size={50}/></motion.div>
            <motion.div variants={text} className='text-text-800 text-lg'>
                {name}
            </motion.div>
        </>
    )
}

export default SkillItem
