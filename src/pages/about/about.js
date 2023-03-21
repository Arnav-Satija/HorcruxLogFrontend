import React from 'react'
import "./about.css";

export default function About() {
  return (
    <div className="section">
        <div className="container">
            <div className="content-section">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="content">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className="button">
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="social">
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="image-section">
                <img src="https://raw.githubusercontent.com/dhakallena/Responsive-About-Us-section-Using-Html-And-Css/master/image/img%20one.jpg"
                alt=''></img>
            </div>
        </div>
    </div>
  )
}
