import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png';
import './Navbar.css';
import './NavbarLink.css'; 

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
  }

  handleDropdownToggle = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  render() {
    return (
      <nav className="navbar">
        <div>
          <img src={logo} alt="Agency Logo" className="navbar-logo" />
          <span className="navbar-logo">Luxury Escapes</span>
        </div>
        <ul className="navbar-items">
          <li className="navbar-item"><Link to="/" className="navbar-link">ACASA</Link></li>
          <li className="navbar-item" onMouseEnter={this.handleDropdownToggle} onMouseLeave={this.handleDropdownToggle}>
            <Link to="/destinations" className="navbar-link">DESTINATII</Link>
            <ul className="dropdown">
              <li><Link to="/destinations" className="navbar-link">Toate Destinatiile</Link></li>
              <li><Link to="/offers" className="navbar-link">Oferte</Link></li>
              
            </ul>
          </li>
          <li className="navbar-item"><Link to="/contact" className="navbar-link">CONTACT</Link></li>
          <li className="navbar-item search-bar"> 
            <input type="text" placeholder="Cautare..." />
            <button>Search</button> 
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
