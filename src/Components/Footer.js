import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Food Bank Street</p>
          <p>City, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@foodbank.org</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 2pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Food Bank. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;