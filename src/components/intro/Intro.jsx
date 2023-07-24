import { useEffect, useRef } from 'react'
import './intro.scss'
// font animation
import Typewriter from 'typewriter-effect'

export default function Intro() {

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png " alt='pic' />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1>Robert JiQiang WANG</h1>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ["Developer", "Designer", "Content Creater"],
                                autoStart: true,
                                delay: 100,
                                loop: true
                            }}
                        />
                    </h3>
                </div>
                <a href="#profolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
