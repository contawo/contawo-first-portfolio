import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import { send } from "emailjs-com"

const Contact = () => {
    const [userName, setUsername] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleName = (e) => {
        setUsername(e.target.value)
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value)
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const submitMail = (e) => {
        e.preventDefault();
        send(
            'service_xy38mbr',
            'template_8cdydve',
            {userName, userMessage, userEmail},
            'DFfU6nD-YpIx8JyA7'
        ).then(response => {
            alert("Email recieved")
        }).catch(err => {
            alert("Email failed to send")
        })
        setUsername('');
        setUserEmail('');
        setUserMessage('');
    }

    return (
        <div className="contact">
            <Navigation/>
            <div className="main-contact">
                <div className="contact-title">
                    <i class="fa-solid fa-bars nav-button"></i>
                    <h1>Contact</h1>
                </div>
                <form 
                    className="contact-form"
                    onSubmit={submitMail}>
                    <div className="text-input">
                        <input 
                            type="text"
                            name="user-name"
                            value={userName}
                            required
                            placeholder="Enter your name"
                            onChange={handleName}/>
                    </div>
                    <div className="text-message">
                        <textarea
                            value={userMessage}
                            required
                            placeholder="Message"
                            name="user-message"
                            onChange={handleMessage}/>
                        <button className="send-message" type="submit">
                            <h1>Send</h1>
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                    <div className="text-input">
                        <input 
                            type="email"
                            name="user-email"
                            required
                            value={userEmail}
                            onChange={handleEmail}
                            placeholder="Enter your email"/>
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