import React from 'react'
import { BounceLoader } from 'react-spinners'
const LoadingAnimation = () => {
    return (
        <div className='h-[100vh] w-full flex flex-col bg-zinc-900 items-center justify-center'>
            <h1>
                Loading ...
            </h1>
            <BounceLoader color='fuchsia' size={100}
            />
        </div>
    )
}

export default LoadingAnimation