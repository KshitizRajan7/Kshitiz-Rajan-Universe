import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-black text-white">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-lg">Loading the universe...</p>
            </div>
        </div>
    )
}

export default Loader
