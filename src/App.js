import ContactBar from './Components/ContactBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="welcome-bar">
          Welcome to my Pinterest-themed portfolio website!
        </div>

        <h1>Swetha Anantha Krishnan</h1>
        <p className="subtitle">Your boards</p>
      </header>
      <ContactBar />
      {/* Other components like Navbar, About, etc. */}
    </div>
  );
}

export default App;