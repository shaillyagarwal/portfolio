import React from 'react';
import './Contact.css'; // Optional: Add CSS for styling

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-links">
                <a 
                    href="mailto:shaillyag2003@gmail.com" 
                    className="contact-link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i> Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/shailly-agarwal-ait/" 
                    className="contact-link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a 
                    href="https://github.com/shaillyagarwal/" 
                    className="contact-link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a 
                    href="https://leetcode.com/u/shailly_agarwal_2103/" 
                    className="contact-link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fab fa-leetcode"></i> Leetcode
                </a>
            </div>
        </section>
    );
}

export default Contact;
