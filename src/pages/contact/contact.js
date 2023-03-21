import React from 'react'
import './contact.css';

export default function Contact() {
  return (
    <div className="con">
        <div className="contact-section">
            <div className="contact-info">
                <div><i className="color fa-solid fa-location-dot"></i>Address, City, Country</div>
                <div><i className="color fa-solid fa-envelope"></i>contact@email.com</div>
                <div><i className="color fa-solid fa-phone"></i>+00 0000 000 000</div>
                <div><i className="color fa-regular fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form className="contact">
                    <input type="text" name="name" className="text-box" placeholder="Enter Your Name..." required/>
                    <input type="email" name="email" className="text-box" placeholder="Enter Your Email..." required/>
                    <textarea name="message" rows="5" placeholder="Your Message" required/>
                    <input type="submit" name="submit" className="send-btn" value="Send"/>
                </form>
            </div>
        </div>
    </div>
  );
}
