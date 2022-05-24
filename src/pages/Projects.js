import React from "react";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects">
            <Navigation/>
            <div className='main-proj'>
                <a href="https://www.docdroid.net/fGnVE4p/cv-pdf" target="_blank" rel="noopener noreferrer" className='cv'>
                    <i class="fa-solid fa-share"></i>
                    <h1>Resume</h1>
                </a>
                <div className='col-proj one'>
                    <div className='proj-item'>
                        <img src='./images/bg.jpg' alt="project-item"/>
                        <h2>Title</h2>
                        <p>bnxdvbsdJKVb V jdbv bdvs jbivdSV hvcdzVSD jhvvdjKBV sdvkbsdV</p>
                        <div className='proj-links'>
                            <i class="fa-solid fa-images"></i>
                            <i class="fa-solid fa-code"></i>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                    <Link to='/contact' className='proj-about'>
                        <h1>Contact</h1>
                        <i class="fa-solid fa-forward"></i>
                    </Link>
                </div>
                <div className='col-proj two'>
                    <div className='proj-item'>
                    <img src='./images/bg.jpg' alt="project-item"/>
                        <h2>Title</h2>
                        <p>bnxdvbsdJKVb V jdbv bdvs jbivdSV hvcdzVSD jhvvdjKBV sdvkbsdV</p>
                        <div className='proj-links'>
                            <i class="fa-solid fa-images"></i>
                            <i class="fa-solid fa-code"></i>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                </div>
                <div className='col-proj three'>
                    <div className='download'>
                        <a href="https://www.docdroid.net/fGnVE4p/cv-pdf" target="_blank" rel="noopener noreferrer" className='resume'>
                            <i class="fa-solid fa-share"></i>
                            <h1>Resume</h1>
                        </a>
                        <h1>Projects</h1>
                    </div>
                    <div className='proj-item'>
                    <img src='./images/bg.jpg' alt="project-item"/>
                        <h2>Title</h2>
                        <p>bnxdvbsdJKVb V jdbv bdvs jbivdSV hvcdzVSD jhvvdjKBV sdvkbsdV</p>
                        <div className='proj-links'>
                            <i class="fa-solid fa-images"></i>
                            <i class="fa-solid fa-code"></i>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;