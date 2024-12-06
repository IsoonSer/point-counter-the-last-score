import React from 'react'
import Button from './Button'

const Timer = () => {
  return (
    <div className='shadow-2xl p-6 rounded-lg flex flex-col gap-6'>
        <div className='font-bold text-4xl'>00:00:00</div>
        <div className='flex flex-row justify-between gap-2'>
            <Button text='เริ่ม' color='bg-green-600'/>
            <Button text='หยุด' color='bg-red-600'/>
            <Button text='รีเซ็ต' color='bg-yellow-500'/>
        </div>
    </div>
  )
}

export default Timer