import React from 'react';

function Services() {
  return (
    <section className="services-section" id="services">
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
  );
}

export default Services;