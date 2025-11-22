import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroScene } from './components/IntroScene';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
  };

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('introShown');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showIntro && <IntroScene onComplete={handleIntroComplete} />}
        
        {!showIntro && (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;