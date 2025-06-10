import React from 'react';

function GetInvolved({ setShowDonateModal, setShowVolunteerModal }) {
  return (
    <section className="get-involved">
      <h2>How to Get Involved</h2>
      <div className="involvement-options">
        <div className="option" onClick={() => setShowDonateModal(true)}>
          <h3>Donate Food</h3>
          <p>Drop off non-perishable food items at our locations</p>
        </div>
        <div className="option" onClick={() => setShowVolunteerModal(true)}>
          <h3>Volunteer</h3>
          <p>Join our team of dedicated volunteers</p>
        </div>
        <div className="option" onClick={() => setShowDonateModal(true)}>
          <h3>Fundraise</h3>
          <p>Organize a food drive or fundraising event</p>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;