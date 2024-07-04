import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.jpg'; // Assuming this is the correct path for your logo
import '../style/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('loggedInUser') !== null,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="title">
            <Link to="/">
              <h1>Buffer</h1>
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="about">
            <Link to="/about">About</Link>
          </div>
          <div className="signin">
            {isLoggedIn ? (
              <React.Fragment>
                <Link to="/profile" className="link">
                  <h3 className="family">{localStorage.getItem('loggedInUser').slice(0, 1).toUpperCase()}</h3>
                </Link>
                {/* Any additional content for authenticated users */}
              </React.Fragment>
            ) : (
              <Link to="/login" className="link" style={{ padding: '11px' }}>
                <h3>Sign-in</h3>
              </Link>
            )}
          </div>
          <div className="other">
            {isLoggedIn ? (
              <button className="logout-button">
                <Link to="/logout" className="link">
                  <h2>Logout</h2>
                </Link>
              </button>
            ) : (
              <Link to="/register" className="link">
                <h2>Register</h2>
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
