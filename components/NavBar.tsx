import React from 'react'

const NavBar = () => {
    return (
        <div className='w-screen bg-blue-950 p-4'>
            <div className='flex flex-row max-w-6xl mx-auto justify-between items-center'>
                <div className='text-orange-400 font-bold text-2xl'>Point Counter (The Last Score)</div>
                <div>
                    <ul className='flex flex-row gap-10 text-white'>
                        <li className='duration-300 hover:text-orange-400'><a className='font-medium text-xl' href="">Home</a></li>
                        <li className='duration-300 hover:text-orange-400'><a className='font-medium text-xl' href="">About</a></li>
                        <li className='duration-300 hover:text-orange-400'><a className='font-medium text-xl' href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar