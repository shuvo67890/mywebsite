import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/fp2.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-pera">
                        <p>I have practical experience working with many web applications.Throughout my career I want to collaborate with prestigious organizations and contribute to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievent">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievent">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                {/* <div className="about-achievent">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div> */}
            </div>
        </div>
    );
};

export default About;