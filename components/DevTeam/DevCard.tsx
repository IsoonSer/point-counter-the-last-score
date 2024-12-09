import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

interface DevCardProps {
    name: string,
    role: string,
    college: string,
    userImage: string
}

const DevCard = ({ name, role, college, userImage }: DevCardProps) => {
    return (
        <div className='flex flex-col w-full h-full max-w-xl shadow-xl rounded-lg overflow-hidden gap-6'>
            <img src={userImage} alt="" className='object-cover h-50' />
            <div className='flex flex-col gap-4 items-center'>
                <h3 className='font-bold text-xl'>{name}</h3>
                <p className='text-lg text-gray-600'>{role}</p>
                <p className='font-medium'>{college}</p>
            </div>
            <div className='flex flex-row justify-center gap-2'>
                <FontAwesomeIcon icon={faGithub as IconProp} className='text-xl hover:cursor-pointer hover:text hover:text-blue-600' />
                <FontAwesomeIcon icon={faFacebook as IconProp} className='text-xl hover:cursor-pointer hover:text hover:text-blue-600' />
            </div>
            <footer className='p-2 text-center bg-blue-950 text-white font-bold hover:bg-blue-100 hover:text-black hover:cursor-pointer' >
                <p>Contact</p>
            </footer>
        </div>
    )
}

export default DevCard