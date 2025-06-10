import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Impact from './Components/Impact';
import GetInvolved from './Components/GetInvolved';
import Footer from './Components/Footer';
import DonateModal from './Components/modals/DonateModal';
import HelpModal from './Components/modals/HelpModal';
import VolunteerModal from './Components/modals/VolunteerModal';

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