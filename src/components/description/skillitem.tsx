import React from 'react'
import { IconType } from 'react-icons/lib'
import { useConfigContext } from '../../context/appcontext'

interface ItemProps{
    icon: IconType
    name: string
}

const SkillItem:React.FC<ItemProps> = ({icon, name}) => {
    const {darkMode} = useConfigContext()
    
    const IconComponent = icon;
    return (
        <>
            <div><IconComponent color={darkMode?'white':'#142d52'} size={50}/></div>
            <div className='text-text-800 text-lg'>
                {name}
            </div>
        </>
    )
}

export default SkillItem
