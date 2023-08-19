import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Logo from '../../logo.png';
import './Login.css';
import axios from 'axios'; // Import Axios

function Login(props) {
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/users/login', { email, password }); 
      if (response.status === 200) {
        props.onLogin(response.data.username); // Call onLogin with the username
        navigate('/');
        
      } else {
       
      }
    } catch (error) {
      
    }
  };

  return (
    <div>
      <Header />
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
        
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
         
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
