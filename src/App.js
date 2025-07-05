import ContactBar from './Components/ContactBar';
import './App.css';
import Boards from './Components/Boards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import { useLocation } from 'react-router-dom';
import TypingText from './Components/TypingText';


function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      {isHome && (
        <header className="app-header">
          <ContactBar />
          <div className="welcome-bar">
            Welcome to my Pinterest-inspired portfolio website!
          </div>
          <TypingText text="Swetha Anantha Krishnan" speed={150} />
        </header>
      )}

      {!isHome && <ContactBar />} {/* contact bar is displayed on all pages */}

      <Routes>
        <Route path="/" element={<Boards />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;