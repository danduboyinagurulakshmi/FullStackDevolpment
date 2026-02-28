import React from 'react';
import Navbar from "../Navbar/Navbar";
import './Contact.css';

function Contact() {
  return (
    <>
      <Navbar />

      <section className="Contact-page">
        <h1 className="Contact-title">Contact Us</h1>

        <div className="Contact-card">
          <h3>Managing Director</h3>
          <p>K. Naga Lakshmi</p>
          <p>Phone: 9346204915</p>
          <p>Email: karnatinagalakshmi8@gmail.com</p>
        </div>

        <div className="Contact-card">
          <h3>Principal</h3>
          <p>D. Gurulakshmi</p>
          <p>Phone: 9949074581</p>
          <p>Email: anjalidanduboyina@gmail.com</p>
        </div>

        <div className="Contact-card">
          <h3>Chairman</h3>
          <p>B. Nikitha</p>
          <p>Phone: 800813620</p>
          <p>Email: bnikitha712@gmail.com</p>
        </div>
      </section>

      <div className="footer-clg1">
        <footer>
          <p>&copy; 2026 KSRM College of Engineering</p>
        </footer>
      </div>
    </>
  );
}

export default Contact;