import './App.css';
import Home from './pages/page1/Homepage';
import Activity from './pages/page2/adactivity';
import  Login  from './pages/page3/Login';
import Signup from './pages/page4/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Router>
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
