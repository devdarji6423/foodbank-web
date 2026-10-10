import React, { useState } from 'react';
import Modal from './Modal';

function HelpModal({ onClose }) {
  const [helpForm, setHelpForm] = useState({
    name: '',
    email: '',
    needType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dear ${helpForm.name}, we've received your request for assistance. We'll contact you shortly.`);
    setHelpForm({ name: '', email: '', needType: '' });
    onClose();
  };

  return (
    <Modal title="Request Assistance" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="help-name">Name:</label>
          <input
            id="help-name"
            type="text"
            value={helpForm.name}
            onChange={(e) => setHelpForm({...helpForm, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="help-email">Email:</label>
          <input
            id="help-email"
            type="email"
            value={helpForm.email}
            onChange={(e) => setHelpForm({...helpForm, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="help-need">Type of Assistance Needed:</label>
          <select
            id="help-need"
            value={helpForm.needType}
            onChange={(e) => setHelpForm({...helpForm, needType: e.target.value})}
            required
          >
            <option value="">Select type</option>
            <option value="food">Food Assistance</option>
            <option value="emergency">Emergency Support</option>
            <option value="meals">Hot Meals</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Submit Request</button>
      </form>
    </Modal>
  );
}

export default HelpModal;
