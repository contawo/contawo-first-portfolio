import React from 'react';
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <Navigation/>
            <div className="main-about">
                <div className="about-content">
                    <h1>What I do?</h1>
                    <p>I am from South Africa, I create websites with design and code. Passionate with what I do and love working with other people.</p>
                    <a href='https://fontawesome.com/' className='blog-button' target="_blank" rel="noopener noreferrer">
                        <h1>Check out my blog</h1>
                    </a>
                </div>
                <div className='about-info'>
                    <h1>About</h1>
                    <Link to='/projects' className='about-about'>
                        <h1>Projects</h1>
                        <i class="fa-solid fa-forward"></i>
                    </Link>
                </div>
                <div className="mobile-about">
                    <Link to='/projects' className='about-about-mobile'>
                        <h1>Projects</h1>
                        <i class="fa-solid fa-forward"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About;
