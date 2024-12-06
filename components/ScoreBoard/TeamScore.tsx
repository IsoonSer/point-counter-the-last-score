import React from 'react'
import Button from './Button'

interface TeamScoreProps {
    teamName: string
}

const TeamScore = ({teamName}: TeamScoreProps) => {
  return (
    <div className='flex flex-col gap-6'>
        <div><h3 className='text-center text-xl font-bold'>{teamName}</h3></div>
        <div className='p-24 bg-red-300 rounded-2xl border-4 border-blue-950'>
            <p className='text-6xl font-bold'>20</p>
        </div>
        <div className='flex flex-row gap-3 w-4/5 mx-auto'>
            <Button text='เพิ่ม' color='bg-green-600' />
            <Button text='ลด' color='bg-red-600' />
        </div>
    </div>
  )
}

export default TeamScore