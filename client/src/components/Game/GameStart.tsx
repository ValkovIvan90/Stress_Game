import React from 'react'
import './GameStart.css';

type Props = {}


export default function GameStart() {
    return (
        <div className='main'>
            <div className="video">
                <video src={"https://player.vimeo.com/progressive_redirect/playback/360248610/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=89b26ae81e0b28e4725ae1bf92529bb969d107444f170e3e59dd8e02c2fe9e32"} autoPlay loop muted className='min-vh-100 min-vw-100' />
            </div>
            <div className="content">
                <h1 className='text-white'>Welcome</h1>
                <p>To my site.</p>
            </div>
        </div>
    )
}