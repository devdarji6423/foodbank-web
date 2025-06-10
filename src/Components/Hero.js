import React from 'react';

function Hero({ setShowDonateModal, setShowHelpModal }) {
  return (
    <header className="hero-section">
      <h1>Fighting Hunger Together</h1>
      <p>Providing food assistance to those in need in our community</p>
      <div className="cta-buttons">
        <button className="btn-primary" onClick={() => setShowDonateModal(true)}>
          Donate Now
        </button>
        <button className="btn-secondary" onClick={() => setShowHelpModal(true)}>
          Get Help
        </button>
      </div>
    </header>
  );
}

export default Hero;