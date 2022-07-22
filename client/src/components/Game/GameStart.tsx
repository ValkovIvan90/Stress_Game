import './GameStart.css';

import sound from '../../assets/sound.mp3';
import { useEffect, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

type Props = {}

export default function GameStart() {
    useEffect(() => {
        // const audio = new Audio(sound);
        // audio.loop = false;
        // audio.play();
    }, [])


    /*Video autoPlay loop muted */

    return (
        <div className='main'>
            <div className="video">
                <video src={"https://player.vimeo.com/progressive_redirect/playback/360248610/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=89b26ae81e0b28e4725ae1bf92529bb969d107444f170e3e59dd8e02c2fe9e32"}
                    autoPlay loop muted className='min-vh-100 min-vw-100' />
            </div>
            <div className="content">
                <div className="row">
                    <div className="clock col-lg-4">
                        <p className='bg-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequuntur sunt laborum praesentium eum quas, numquam consectetur mollitia asperiores accusantium quod corporis ipsam nam, officiis consequatur natus, id reiciendis itaque.</p>
                    </div>
                    <div className="emojy col-lg-4">
                        <p className='bg-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequuntur sunt laborum praesentium eum quas, numquam consectetur mollitia asperiores accusantium quod corporis ipsam nam, officiis consequatur natus, id reiciendis itaque.</p>
                    </div>
                    <div className="col-lg-4" style={{ height: "50px" }}>
                        <table className="table bg-transparent text-white w-50">
                            <tbody>
                                <tr>
                                    <th scope="row">20
                                        <span className='ps-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-diamond-fill text-warning" viewBox="0 0 16 16">
                                                <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                                            </svg>
                                        </span>
                                    </th>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <th scope="row">19</th>
                                    <td>1900</td>
                                </tr>
                                <tr>
                                    <th scope="row">18</th>
                                    <td>1800</td>
                                </tr>
                                <tr>
                                    <th scope="row">17</th>
                                    <td>1700</td>
                                </tr>
                                <tr>
                                    <th scope="row">16</th>
                                    <td>1600</td>
                                </tr>
                                <tr>
                                    <th scope="row">15</th>
                                    <td>1500</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td>1400</td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td>1300</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>1100</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>900</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>800</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>400</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="question-options d-flex flex-column align-items-center w-100">
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
                    <div className="options row pt-5 d-flex justify-content-between">
                        <div className="col-lg-5 col-md-4 bg-primary p-2 m-2 text-center rounded-pill">
                            <p className='text-white m-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-lg-5 col-md-4 bg-primary p-2 m-2 text-center rounded-pill">
                            <p className='text-white m-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-lg-5 col-md-4 bg-primary p-2 m-2 text-center rounded-pill">
                            <p className='text-white m-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-lg-5 col-md-4 bg-primary p-2 m-2 text-center rounded-pill">
                            <p className='text-white m-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div >

    )
}