import React, { useRef, useEffect } from 'react'

const AudioPlayer = (props) => {
    const songRef = useRef(null)
    useEffect(() => {
        songRef.current.volume = props.audioLevel
        songRef.current.play()
    }, [props.audioLevel])

    return (
        <audio src={props.audioPath} ref={songRef} loop   ></audio>
    )
}

export default AudioPlayer