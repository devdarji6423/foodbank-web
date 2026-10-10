import React from 'react';

function GetInvolved({ setShowDonateModal, setShowVolunteerModal }) {
  return (
    <section className="get-involved" id="get-involved">
      <h2>How to Get Involved</h2>
      <div className="involvement-options">
        <button type="button" className="option" onClick={() => setShowDonateModal(true)}>
          <h3>Donate Food</h3>
          <p>Drop off non-perishable food items at our locations</p>
        </button>
        <button type="button" className="option" onClick={() => setShowVolunteerModal(true)}>
          <h3>Volunteer</h3>
          <p>Join our team of dedicated volunteers</p>
        </button>
        <button type="button" className="option" onClick={() => setShowDonateModal(true)}>
          <h3>Fundraise</h3>
          <p>Organize a food drive or fundraising event</p>
        </button>
      </div>
    </section>
  );
}

export default GetInvolved;