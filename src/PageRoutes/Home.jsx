import React from 'react'
import Lottie from 'lottie-react'
import Animation from '../assets/46075-children-holding-letters.json'
const Home = () => {
    return (
        <div className='h-[100vh] flex  backgroundOne items-start justify-center p-6  w-full'>
            <div className='w-1/2 h-full  flex flex-col items-start justify-center'>
                <h1 className='text-emerald-400 bg-white mb-6'>Welcome to the Rights Game</h1>
                <Lottie className='w-[100%] bg-gradient-to-bl from-purple-700 shadow-md shadow-slate-100 via-rose-700 to-fuchsia-600 background-animate-longest  rounded-br-full ' animationData={Animation} />
            </div>
            <div className='w-1/2 h-full  flex flex-col items-center justify-center'>
                <h1 className='text-emerald-400 bg-white mb-6'>Welcome to the Rights Game</h1>
            </div>
        </div>

    )
}

export default Home