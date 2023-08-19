import './App.css';
import { useState } from 'react'; // Import useState
import Home from './pages/page1/Homepage';
import Activity from './pages/page2/adactivity';
import Login from './pages/page3/Login';
import Signup from './pages/page4/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import Header component
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial value
  const [userName, setUserName] = useState('');

  const handleLogout = () => {
    // Perform logout actions, e.g., clear authentication token
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/2" element={<Activity />} />
          <Route path="/3" element={<Login />} />
          <Route path="/4" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
