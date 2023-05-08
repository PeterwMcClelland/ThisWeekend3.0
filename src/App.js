import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUp/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';

function HomePage() {
  return <div></div>;
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
          </Routes>
          </div>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;

