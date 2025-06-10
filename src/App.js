import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import DonateModal from './components/modals/DonateModal';
import HelpModal from './components/modals/HelpModal';
import VolunteerModal from './components/modals/VolunteerModal';

function App() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      
      <Hero 
        setShowDonateModal={setShowDonateModal}
        setShowHelpModal={setShowHelpModal}
      />
      
      <main>
        <Services />
        <Impact />
        <GetInvolved 
          setShowDonateModal={setShowDonateModal}
          setShowVolunteerModal={setShowVolunteerModal}
        />
      </main>

      <Footer />

      {showDonateModal && <DonateModal onClose={() => setShowDonateModal(false)} />}
      {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}
      {showVolunteerModal && <VolunteerModal onClose={() => setShowVolunteerModal(false)} />}
    </div>
  );
}

export default App;