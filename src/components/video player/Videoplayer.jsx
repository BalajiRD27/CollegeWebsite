import React, { useRef } from 'react'
import clgvideo from '../../assets/clgvideo.mp4'
import './Videoplayer.css'

const Videoplayer = ({play,setPlay}) => {
    const player =useRef(null)

    const setControl=(e)=>{
        if(e.target===player.current){
            setPlay(false)
        }
    }
  return (
    <div ref={player} className={play ? 'video-player' :'video-player hide'} onClick={setControl}>
        <video src={clgvideo} autoPlay controls muted></video>
    </div>
  )
}

export default Videoplayer