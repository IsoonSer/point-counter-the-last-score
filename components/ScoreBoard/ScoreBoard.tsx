import React from 'react'
import Timer from './Timer'
import TeamScore from './TeamScore'
import SetSection from './SetSection'

const ScoreBoard = () => {
    return (
        <div className='w-full'>
            <div className='max-w-5xl mx-auto flex flex-col gap-8'>
                <div className='flex flex-row justify-center mt-4'>
                    <Timer />
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <TeamScore teamName='ENKKU' bgColor='red' />
                    <SetSection />
                    <TeamScore teamName='ENKKU' bgColor='yellow' />
                </div>
            </div>

        </div>
    )
}

export default ScoreBoard