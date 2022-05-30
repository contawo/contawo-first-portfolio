import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className='main-home'>
                <div className='home-content'>
                    <div className='ui-design'>
                        <h1>Designer</h1>
                    </div>
                    <div className='awonke-title'>
                        <h1>Awonke <b className='mno-bold'>Mnotoza</b></h1>
                        <h2>Full-Time Student</h2>
                    </div>
                    <div className='home-title'>
                        <a href="https://www.figma.com/file/gvCz4hK6cgoxVewcGaq17X/My-Profile-Design?node-id=0%3A1" target="_blank" rel="noopener noreferrer" className='resume'>
                            <i class="fa-brands fa-figma"></i>
                            <h1>Figma</h1>
                        </a>
                    </div>
                </div>
                <div className='awonke-title-mobile'>
                        <h1>Awonke <b className='mno-bold-mobile'>Mnotoza</b></h1>
                        <h2>Full-Time Student</h2>
                    </div>
                <div className='home-footer'>
                    <div className='about-link'>
                        <Link to='/about' className='home-about'>
                            <h2>About</h2>
                            <i class="fa-solid fa-forward"></i>
                        </Link>
                    </div>
                    <div className='frontend'>
                        <h1>Frontend Developer</h1>
                    </div>
                </div>
                <Link to='/about' className='home-about-mobile'>
                    <h2>About</h2>
                    <i class="fa-solid fa-forward"></i>
                </Link>
            </div>
        </div>
    )
}

export default Home;