import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Fade } from 'react-reveal';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleGetStarted = () => {
    const isLoggedIn = true; // Replace with your authentication check logic
    if (isLoggedIn) {
      navigate('/2'); // Redirect to activity page if logged in
    } else {
      navigate('/3'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="homeParentDiv">
      <Header />
      <div className="banner-wrapper">
        <div className="banner-header text-center">
          <Fade bottom>
            <h1 className="heading-text">Organize your work and life, finally</h1>
            <p className="heading-p">
              Become focused, organized, and calm with Todoist. From overwhelmed to on top of it
            </p>
            <button className="get-started-button" onClick={handleGetStarted}>
              Get Started
            </button>
        
          </Fade>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
