import React from 'react';
import axios from 'axios';
import Logo from '../../logo.png';
import Header from '../../components/Header/Header';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import useForm from './useForm'; // Update import

export default function Signup() {
  const navigate = useNavigate();
  const { form, handleChange } = useForm({ name: '', email: '', phone: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, phone } = form;

    try {
      const response = await axios.post('http://localhost:3001/api/users/register', {
        name,
        email,
        password
      });

      if (response.status === 200) {
        navigate('/login');
      } else {
        console.log('Registration failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <Header/>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
      
      <form  className='formContainer'  onSubmit={handleSubmit}>
    
        <input className='input input-placeholder-color'
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
       <br />
       <br />
        <input className='input input-placeholder-color'
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
          <br />
          <br />
        <input className='input input-placeholder-color'
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
         <br /> 
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
    </div>
  );
}
