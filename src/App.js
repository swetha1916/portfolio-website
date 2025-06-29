import ContactBar from './Components/ContactBar';
import './App.css';
import Boards from './Components/Boards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import { useLocation } from 'react-router-dom';


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
          <h1>Swetha Anantha Krishnan</h1>
        </header>
      )}

      {!isHome && <ContactBar />} {/* contact bar is displayed on all pages */}

      <Routes>
        <Route path="/" element={<Boards />} />
        <Route path="/about-me" element={<AboutMe />} />
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