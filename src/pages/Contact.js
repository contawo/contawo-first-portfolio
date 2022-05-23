import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="main-contact">
                <div className="contact-title">
                    <i class="fa-solid fa-bars nav-button"></i>
                    <h1>Contact</h1>
                </div>
                <form className="contact-form">
                    <div className="text-input">
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="text-message">
                        <textarea placeholder="Message"/>
                        <div className="send-message">
                            <h1>Send</h1>
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                    <div className="text-input">
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                </form>
                <div className="socials">
                    <a href='/' className="social">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href='/' className="social">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href='/' className="social">
                        <i class="fa-brands fa-facebook-messenger"></i>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Contact;