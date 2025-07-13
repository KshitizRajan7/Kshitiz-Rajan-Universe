import React from 'react'
import Education from './Education'
import Skill from './Skill'
import Exprience from './Exprience'
import Project from './Project'

const Map2d = () => {
    return (
        <div className='h-screen w-screen overflow-x-scroll overflow-y-scroll bg-black flex justify-center items-center'>
            {/* inner scrollable map area */}
            <div className='min-h-[300px] min-w-[300px] relative bg-green-300 text-black'>
                {/* components with absolute */}
                <Education />
                <Skill />
                <Exprience />
                <Project />
            </div>
        </div>
    )
}

export default Map2d
