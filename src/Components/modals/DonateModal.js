import React, { useState } from 'react';

function DonateModal({ onClose }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}! This is a demo - no actual transaction occurred.`);
    setDonationAmount('');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount ($):</label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Donate</button>
        </form>
      </div>
    </div>
  );
}

export default DonateModal;