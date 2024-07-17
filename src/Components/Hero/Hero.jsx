import React from 'react';
import './Hero.css'
import profile_img from '../../assets/fp.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt=''/>
            <h1><span>I am Noman Rahman Suvo,</span> frontend developer based in Bangladesh.</h1>
            <p>I am a frontend developer from Dhaka, Bangladesh with experience building multiple React web applications.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
            


        </div>
    );
};

export default Hero;