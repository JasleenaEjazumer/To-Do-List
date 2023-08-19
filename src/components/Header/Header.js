import { Link } from 'react-router-dom';
import './Header.css';
import logoimage from '../../logo.png';
import homeIcon from '../Header/img/home.png';

function Header({ isLoggedIn, userName, onLogout }) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="brandName">
          <Link to="/">
            <img className="logo" src={logoimage} alt="TODO logo" />
          </Link>
        </div>
        <div className="home-icon">
          <Link to="/" className="nav-button">
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </Link>
        </div>
      </div>
      <div className="nav-buttons">
        {isLoggedIn ? (
          <>
            <span className="user-name">{userName}</span>
            <button className="nav-button" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/4" className="nav-button">
              Sign Up
            </Link>
            <Link to="/3" className="nav-button">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
