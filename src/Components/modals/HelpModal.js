import React, { useState } from 'react';

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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Request Assistance</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={helpForm.name}
              onChange={(e) => setHelpForm({...helpForm, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={helpForm.email}
              onChange={(e) => setHelpForm({...helpForm, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Type of Assistance Needed:</label>
            <select
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
      </div>
    </div>
  );
}

export default HelpModal;