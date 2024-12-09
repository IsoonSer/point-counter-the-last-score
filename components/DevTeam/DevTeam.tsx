import React from 'react'
import DevCard from './DevCard'

const DevTeam = () => {
    return (
        <div className='flex flex-row justify-center'>
            <div className='max-w-3xl flex flex-col items-center gap-8 mt-6'>
                <h2 className='text-3xl font-bold'>ทีมผู้พัฒนา</h2>
                <div className='w-full flex flex-row justify-between gap-10'>
                    <DevCard name='Chitthana R.' role='Engineering Student' college='Computer Eng. KKU' userImage="https://isoons.github.io/images/james.jpeg" />
                    <DevCard name='Isoon S.' role='Engineering Student' college='Computer Eng. KKU' userImage="https://isoons.github.io/images/ozone.jpeg" />
                    <DevCard name='Chotipat S.' role='Engineering Student' college='Computer Eng. KKU' userImage="https://isoons.github.io/images/kul2.jpeg" />
                    
                </div>
            </div>
        </div>
    )
}

export default DevTeam