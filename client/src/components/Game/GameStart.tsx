

import './GameStart.css';

import sound from '../../assets/sound.mp3';
import { useContext, useEffect } from 'react';
import TypewriterComponent from 'typewriter-effect';
import Clock from './Clock/Clock';

import UserContext from '../../context/UserDataContext';



export default function GameStart() {

    const ctx = useContext(UserContext);
     
    useEffect(() => {
        // const audio = new Audio(sound);
        // audio.loop = true;
        // audio.play();
    }, [])


    /*Video autoPlay loop muted */

    return (
        <div className='main'>
            <div className="video">
                <video src={"https://player.vimeo.com/progressive_redirect/playback/360248610/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=89b26ae81e0b28e4725ae1bf92529bb969d107444f170e3e59dd8e02c2fe9e32"}
                    autoPlay loop muted className='min-vh-100 min-vw-100' />
            </div>
            <div className="content d-flex">
                <div className="qustions-options col-lg-10 d-flex flex-wrap align-items-center">
                    <Clock />
                    <div className="question-options d-flex flex-column align-items-center w-100 justify-content-end">
                        <div className="question p-4 mt-5 bg-primary opacity-75 rounded-pill">
                            <p className='m-0 fs-5 text-white'>
                                <TypewriterComponent
                                    onInit={(typewriter) => {
                                        typewriter
                                            .changeDelay(25)
                                            .typeString("consectetur mollitia asperiores accusantium quod corporis ipsam nam?")
                                            .start();
                                    }}
                                />
                            </p>
                        </div>
                        <div className="options row pt-5 d-flex justify-content-between text-center">
                          
                        </div>
                    </div>
                </div>
                <div className="points col-lg-2 col-md-4  ms-5">
                    <div className='user-name mb-5 text-center'>
                        <span className='bg-white opacity-50 text-warning fw-bold p-2 rounded-pill'>&#11088;  {ctx?.userData.name}</span>
                    </div>
                    <div className='table d-flex flex-column align-items-center'>
                        <span>15 &#127937; 1500</span>
                        <span>14 &#10023; 1400</span>
                        <span>13 &#10023; 1300</span>
                        <span>12 &#10023; 1200</span>
                        <span>11 &#10023; 1100</span>
                        <span>10 &#128064; 1000</span>
                        <span>9	&#10023; 900</span>
                        <span>8	&#10023; 800</span>
                        <span>7 &#10023; 700</span>
                        <span>6 &#10023; 600</span>
                        <span>5 &#128170; 500</span>
                        <span>4 &#10023; 400</span>
                        <span>3 &#10023; 300</span>
                        <span>2 &#10023; 200</span>
                        <span>1 &#129460; 100</span>
                    </div>
                </div>
            </div>
        </div >

    )
}