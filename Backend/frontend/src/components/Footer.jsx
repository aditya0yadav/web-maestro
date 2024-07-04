import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../style/Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Innovate ethically, prioritize excellence, and deliver customer-centric solutions sustainably, fostering a diverse, collaborative culture with global impact and resilience.</p>
                    <a href="/about" >Read More</a>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="quick-links">
                        <a href="/">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/about">Contact</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Repel. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
