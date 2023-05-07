import React, { useRef, useEffect } from 'react'
import SongFirst from '../assets/Audio/GameMusic1.mp3'

const AudioPlayer = () => {
    const songRef = useRef(null)
    useEffect(() => {
        songRef.current.play()
    }, [])

    return (
        <audio src={SongFirst} ref={songRef} loop ></audio>
    )
}

export default AudioPlayer