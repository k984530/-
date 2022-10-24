import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style = {{color : '#ffffff', marginRight: '2rem'}}/>
                <div>
                    <p>대한민국 경기도 과천시<br/>과천대로 8길 15</p>
                </div>
            </div>
                <div className='phone'>
                    <p><FaPhone size={20} style = {{color : '#ffffff', marginRight: '2rem'}}/>010-8433-6060</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style = {{color : '#ffffff', marginRight: '2rem'}}/>2017253020@yonsei.ac.kr</p>
                </div>
                <div>
                <p>
                    사업자등록번호 : 714-40-00973 |  대표 : 최  원
                </p>
                </div>
                <div>
                    <p>© 든든한 끼, ALL RIGHTS RESERVED</p>
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p>
                회사 소개
                </p>
                <div className='social'>
                    <FaFacebook size={30} style = {{color : '#ffffff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style = {{color : '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style = {{color : '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer