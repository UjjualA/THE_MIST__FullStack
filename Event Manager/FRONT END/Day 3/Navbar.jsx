// Navbar.js

import { useState } from 'react';
import '../../assets/css/Navbar.css';
import logoImage from '../../assets/images/hh-removebg-preview.png';
import Navhome from '../../pages/admin/Navhome';
// import NavFooter from '../../compoenets/ui/Navfooter';
import Navabout from '../../pages/admin/Navabout';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
// import Navservices from '../../pages/admin/Navservices';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const handleGoBack = () => {
    // Redirect to another page when the arrow back icon is pressed
    navigate('/login'); // Update '/other-page' with the actual path
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logoImage} className="logo-image" alt="Logo" />
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            {/* Use onClick to scroll to the corresponding sections */}
            <a href="home" onClick={() => scrollToSection('home-section')} className='nav-link'>
              Home
            </a>
            <a href="/home#about" onClick={() => scrollToSection('about-section')} className='navv-link'>
              About
            </a>
            <a href="/home#services" onClick={() => scrollToSection('services-section')}className='navvv-link'>
              Events
            </a>
            <a href="/contact" onClick={() => scrollToSection('contact-section')}className='nav-link'>
              Contact
            </a>
            <Link to='/profile'>
            <p className='nav-link' >
              Profile
            </p>
            </Link>
            <LogoutIcon className='logout'style={{color:'white',fontSize:'30px'}} onClick={handleGoBack}/>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
      
      <div id="home-section">
        <Navhome/>
      </div>
      <div id="about-section" >
        <Navabout/>
      </div>
      <div id="services-section" >
        {/* <Navservices/> */}
      </div>
      <div id="contact-section">
        {/* <NavFooter/> */}
      </div>
      {/* <Navhome id="navhome1" />
      <Navhome id="navhome2" />
      <Navhome id="navhome3" /> */}
    </div>
  );
};

export default Navbar;
