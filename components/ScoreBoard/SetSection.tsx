import React from 'react'
import Button from './Button'

const SetSection = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-3xl font-bold text-center'>ชนิดกีฬา</div>
            <div className='flex flex-row justify-between gap-6'>
                <div className='px-8 py-10 bg-blue-100 rounded-lg border-blue-800 border-4'>
                    <p className='font-bold text-4xl'>1</p>
                </div>
                <div className='px-8 py-10 bg-blue-100 rounded-lg border-blue-800 border-4'>
                    <p className='font-bold text-4xl'>1</p>
                </div>
            </div>
            <div className='w-3/5 m-auto'>
                <Button text='รีเซ็ต' color='bg-yellow-500'/>
            </div>
        </div>
    )
}

export default SetSection