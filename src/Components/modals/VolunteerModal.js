import React, { useState } from 'react';
import Modal from './Modal';

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
    <Modal title="Volunteer Registration" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="volunteer-name">Name:</label>
          <input
            id="volunteer-name"
            type="text"
            value={volunteerForm.name}
            onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="volunteer-email">Email:</label>
          <input
            id="volunteer-email"
            type="email"
            value={volunteerForm.email}
            onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="volunteer-availability">Availability:</label>
          <select
            id="volunteer-availability"
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
    </Modal>
  );
}

export default VolunteerModal;
