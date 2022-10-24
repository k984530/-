import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'
import mainVideo from '../assets/main.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id = 'video'>
            <source src={mainVideo} type = 'video/mp4'/>
        </video>
        <div className='content'>
            <h1>든든한 끼</h1>
            <p>NFC & QR 결제 서비스를 준비 중입니다.</p>

            <div>
                <Link to='/service' className='btn'>Service</Link>
                <Link to='/contact' className='btn btn-light'>Launch</Link>
            </div>
        </div>
    </div>
  )
}

export default Video