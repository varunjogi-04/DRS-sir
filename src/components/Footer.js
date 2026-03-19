import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGoogle, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-section-header">
            <FaUniversity className="section-icon" />
            <h3>Contact Information</h3>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p>drsamantaray@fot.du.ac.in</p>
                {/* <p>aranjan@cie.du.ac.in</p> */}
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p> +91 7978761836</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Department of Electronics and Communication Engineering<br />University of Delhi<br />Delhi-110007, India</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-header">
            <FaGraduationCap className="section-icon" />
            <h3>Academic Portfolio</h3>
          </div>
          <div className="footer-links">
            <a href="/about">Academic Profile</a>
            <a href="/research">Research Projects</a>
            <a href="/publications">Publications</a>
            <a href="/teaching">Teaching Portfolio</a>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-header">
            <FaLinkedin className="section-icon" />
            <h3>Connect & Collaborate</h3>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/dr-diptiranjan-samantaray-1b8974173/" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=rj3pkCQAAAAJ" aria-label="Google Scholar" className="social-link">
              <FaGoogle />
              <span>Google Scholar</span>
            </a>
            <a href="https://orcid.org/0000-0002-8963-1268" aria-label="ORCHID ID" className="social-link">
              <FaGoogle />
              <span>ORCHID ID</span>
            </a> 
             <a href="https://www.scopus.com/authid/detail.uri?authorId=57190580946" aria-label="Scopus ID" className="social-link">
              <FaGoogle />
              <span>Scopus ID</span>
            </a>   
             <a href="https://www.researchgate.net/profile/Diptiranjan-Samantaray" aria-label="ResearchGate" className="social-link">
              <FaGoogle />
              <span>ResearchGate</span>
            </a>   
          </div>
          <div className="footer-info">
            <p>For academic collaborations, research discussions, or professional inquiries.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Professor Diptiranja Samantarayn - University of Delhi. All rights reserved.</p>
          <p className="footer-credits">Academic Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;