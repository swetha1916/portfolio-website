import ContactBar from './Components/ContactBar';
import './App.css';
import Boards from './Components/Boards';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <ContactBar />

        <div className="welcome-bar">
          Welcome to my Pinterest-inspired portfolio website!
        </div>

        <h1>Swetha Anantha Krishnan</h1>
        <p className="subtitle">Your boards</p>
      </header>
      
      <Boards />
    </div>
  );
}

export default App;