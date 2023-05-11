import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import SignUpForm from './routes/SignUp/SignUpForm';
import LoginForm from './routes/LoginForm/LoginForm';
import SpotList from './components/SpotList';
import FavoriteSpots from './components/FavoriteSpots';

function HomePage({ favorites, setFavorites }) {
  return (
    <div>
      <SpotList favorites={favorites} setFavorites={setFavorites}></SpotList>
    </div>
  );
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
                    <NavLink to="/favorites">
                      <span className='favorites'>Favorites</span>
                      </NavLink>
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
            <Route exact path="/" element={<HomePage favorites={favorites} setFavorites={setFavorites} />} />
            <Route exact path="/favorites" element={<FavoriteSpots favorites={favorites} />} />
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



