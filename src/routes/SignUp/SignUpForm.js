import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Make a POST request to the registration endpoint on the server
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('User registered successfully!');
        setLoggedInUser(username);
        navigate('/'); // Navigate back to the home page
      } else {
        // Handle registration error
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="homeimage">
      <form className="form" onSubmit={handleSignUp}>
        <div className='inputs-signup'>
        <input
        id='username'
        className='text'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        id='password'
        className='text'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;



