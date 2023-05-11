import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import SignUpForm from './routes/SignUp/SignUpForm';
import LoginForm from './routes/LoginForm/LoginForm';
import SpotsList from './components/SpotList';

function HomePage() {
  return (
    <div>
      <SpotsList></SpotsList>
    </div>
  );
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="homeimage">
          <header className="App-header">
            <div className="navbar">
              <div className='hero-header'>
              <NavLink to="/">This Weekend</NavLink>
              </div>
              <div className="navlink">
                {loggedInUser ? (
                  <>
                    <span className="username-display">{loggedInUser}</span>
                    <button className='logout' onClick={handleLogout}>Log Out</button>
                  </>
                ) : (
                  <>
                  <div className='signin-signup'>
                    <NavLink to="/signup">
                      <span className='signup'>Sign Up  / </span>
                    </NavLink>
                    <NavLink to="/login">
                      <span className='login'>Log In</span>
                    </NavLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/signup"
              element={<SignUpForm setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              exact
              path="/login"
              element={<LoginForm setLoggedInUser={setLoggedInUser} />}
            />
          </Routes>
          <div className="homebody"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


