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
                    <h1>CV</h1>
                </a>
                <div className='col-proj one'>
                <div className='proj-item'>
                    {/* <img src='./images/compressed/back.jpg' alt="project-item"/> */}
                        <h2>Travel Journal</h2>
                        <p>I was exploring the use of props in React and requesting data with fetch. I requested data from an API, that displays different qoutes everytime the browser reloads.</p>
                        <div className='proj-tools'>
                            <h1>Tools</h1>
                            <div className='proj-tools-item'>
                                <i class="fa-brands fa-react"></i>
                                {/* <i class="fa-brands fa-python"></i>
                                <i class="fa-brands fa-html5"></i> */}
                                <i class="fa-brands fa-css3"></i>
                                {/* <i class="fa-brands fa-js"></i> */}
                            </div>
                        </div>
                        <div className='proj-links'>
                            <a href='https://www.figma.com/file/bXdJf6E7HoDh64N927Er3x/Travel-Journal?node-id=0%3A1' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-figma"></i>
                            </a>
                            <a href='https://github.com/Awonke11/travel-journal-project' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-code"></i>
                            </a>
                            <a href='https://youtu.be/GEdTQrKpx3w' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-eye"></i>
                            </a>
                        </div>
                    </div>
                    
                    <Link to='/contact' className='proj-about'>
                        <h1>Contact</h1>
                        <i class="fa-solid fa-forward"></i>
                    </Link>
                </div>
                <div className='col-proj two'>
                <div className='proj-item'>
                        {/* <img src='./images/compressed/back.jpg' alt="project-item"/> */}
                        <h2>Personal Portfolio</h2>
                        <p>My first portfolio site. Used background video and with email-js on the contact form. Handled the form using functions and alert.</p>
                        <div className='proj-tools'>
                            <h1>Tools</h1>
                            <div className='proj-tools-item'>
                                <i class="fa-brands fa-react"></i>
                                {/* <i class="fa-brands fa-python"></i> */}
                                {/* <i class="fa-brands fa-html5"></i> */}
                                <i class="fa-brands fa-css3"></i>
                                {/* <i class="fa-brands fa-js"></i> */}
                            </div>
                        </div>
                        <div className='proj-links'>
                            <a href='https://www.figma.com/file/PPfn4PMjoLjTAjZ61Cj0qs/Personal-Portfolio' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-figma"></i>
                            </a>
                            <a href='https://github.com/Awonke11/personal-portfolio' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-code"></i>
                            </a>
                            <a href='https://awonke.netlify.app/' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-eye"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className='col-proj three'>
                    <div className='download'>
                        <a href="https://www.docdroid.net/fGnVE4p/cv-pdf" target="_blank" rel="noopener noreferrer" className='resume'>
                            <i class="fa-solid fa-share"></i>
                            <h1>CV</h1>
                        </a>
                        <h1>Projects</h1>
                    </div>
                    <div className='proj-item'>
                        <h2>Is it new year?</h2>
                        <p>Exploring how views work in Django, hence I created this application that displays whether it is a new year or not.With the project, there are other endpoints that lead to other basic pages.</p>
                        <div className='proj-tools'>
                            <h1>Tools</h1>
                            <div className='proj-tools-item'>
                                {/* <i class="fa-brands fa-react"></i> */}
                                <i class="fa-brands fa-python"></i>
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3"></i>
                                {/* <i class="fa-brands fa-js"></i> */}
                            </div>
                        </div>
                        <div className='proj-links'>
                            {/* <a href='/' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-figma"></i>
                            </a> */}
                            <a href='https://github.com/Awonke11/Is-new-year-' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-code"></i>
                            </a>
                            <a href='https://youtu.be/GF1nczvV1jk' className='proj-link-to' target="_blank" rel="noopener noreferrer">
                                <i class="fa-solid fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;