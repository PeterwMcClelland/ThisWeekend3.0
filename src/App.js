import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUp/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import SpotsList from './components/SpotList';

function HomePage() {
  return <div>
    <SpotsList></SpotsList>
  </div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='homeimage'>
        <header className="App-header">
          <div className="navbar">
            
            <NavLink to="/">This Weekend</NavLink>
            <div className="navlink">
              <NavLink to="/signup">
                <span>Sign Up</span>
              </NavLink>
              <div>
                {/* <NavLink to="/spotlist">
                  <span>Spot List</span>
                </NavLink> */}
              </div>
            </div>
            <div className="navlink">
              <NavLink to="/login">
                <span>Log In</span>
              </NavLink>
            </div>
          </div>
          </header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUpForm />} />
            <Route exact path="/login" element={<LoginForm />} />
            {/* <Route exact path="/spotlist" element={<SpotsList />} /> */}
          </Routes>
          <div className='homebody'></div>
          </div>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;

