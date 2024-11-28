import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-section" id="contact">
      <h2 className="section-heading">Get in Touch</h2>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;