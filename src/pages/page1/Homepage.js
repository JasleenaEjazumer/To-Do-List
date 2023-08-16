import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Header from '../../components/Header/Header';
import { Fade } from 'react-reveal';
import './home.css';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <div className="banner-wrapper">
        <div className="banner-header text-center">
          <Fade bottom>
            <h1 className="heading-text">
              Search Beauty Experts, Make an Appointment
            </h1>
            <p className="heading-p">
              Discover the beauty experts, hair dressers & massage therapist
              nearest to you.
            </p>
            <Link to="/get-started">
              <button className="get-started-button">Get Started</button>
            </Link>
          </Fade>
        </div>
      </div>
      {/* Rest of your content */}
    </div>
  );
}

export default Home;
