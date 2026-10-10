import React, { useState } from 'react';
import Modal from './Modal';

function DonateModal({ onClose }) {
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}! This is a demo - no actual transaction occurred.`);
    setDonationAmount('');
    onClose();
  };

  return (
    <Modal title="Make a Donation" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="donation-amount">Amount ($):</label>
          <input
            id="donation-amount"
            type="number"
            min="1"
            step="0.01"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Donate</button>
      </form>
    </Modal>
  );
}

export default DonateModal;
