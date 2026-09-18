import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PilotModal from './components/PilotModal';
import Home from './pages/Home';
import ForColleges from './pages/ForColleges';
import Programs from './pages/Programs';
import Projects from './pages/Projects';
import Workshops from './pages/Workshops';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="app-container">
      <ScrollToTop />

      <Navbar onOpenPilotModal={() => setIsPilotModalOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenPilotModal={() => setIsPilotModalOpen(true)} />} />
          <Route path="/for-colleges" element={<ForColleges onOpenPilotModal={() => setIsPilotModalOpen(true)} />} />
          <Route path="/programs" element={<Programs onOpenPilotModal={() => setIsPilotModalOpen(true)} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops onOpenPilotModal={() => setIsPilotModalOpen(true)} />} />
          <Route path="/about" element={<About onOpenPilotModal={() => setIsPilotModalOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer onOpenPilotModal={() => setIsPilotModalOpen(true)} />

      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        onSubmitted={(msg) => triggerToast(msg)}
      />

      {toastMessage && (
        <div className="toast">
          <span>⚡ {toastMessage}</span>
        </div>
      )}
    </div>
  );
}
