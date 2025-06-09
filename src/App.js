import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Food Bank</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Fighting Hunger Together</h1>
        <p>Providing food assistance to those in need in our community</p>
        <div className="cta-buttons">
          <button className="btn-primary">Donate Now</button>
          <button className="btn-secondary">Get Help</button>
        </div>
      </header>

      <main>
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Food Distribution</h3>
              <p>Weekly food packages for families in need</p>
            </div>
            <div className="service-card">
              <h3>Emergency Assistance</h3>
              <p>Immediate food support for crisis situations</p>
            </div>
            <div className="service-card">
              <h3>Community Kitchen</h3>
              <p>Hot meals served daily to those in need</p>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="stats-container">
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Meals Served Monthly</p>
            </div>
            <div className="stat-box">
              <h3>500+</h3>
              <p>Families Helped</p>
            </div>
            <div className="stat-box">
              <h3>100+</h3>
              <p>Volunteers</p>
            </div>
          </div>
        </section>

        <section className="get-involved">
          <h2>How to Get Involved</h2>
          <div className="involvement-options">
            <div className="option">
              <h3>Donate Food</h3>
              <p>Drop off non-perishable food items at our locations</p>
            </div>
            <div className="option">
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers</p>
            </div>
            <div className="option">
              <h3>Fundraise</h3>
              <p>Organize a food drive or fundraising event</p>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default App;