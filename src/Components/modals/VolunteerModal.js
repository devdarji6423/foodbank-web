import React, { useState } from 'react';

function VolunteerModal({ onClose }) {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    availability: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for volunteering, ${volunteerForm.name}! We'll contact you soon.`);
    setVolunteerForm({ name: '', email: '', availability: '' });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Volunteer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={volunteerForm.name}
              onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={volunteerForm.email}
              onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Availability:</label>
            <select
              value={volunteerForm.availability}
              onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
              required
            >
              <option value="">Select availability</option>
              <option value="weekday">Weekdays</option>
              <option value="weekend">Weekends</option>
              <option value="both">Both</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerModal;