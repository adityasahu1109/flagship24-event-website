import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion} from 'framer-motion';
import './Navbar.css';

// Import your logo
import clubLogo from '../assets/club-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            <img src={clubLogo} alt="Entrepreneurship Club Logo" />
          </Link>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            to="speakers" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            Speakers
          </Link>
          <Link 
            to="register" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            Register
          </Link>
          <Link 
            to="footer" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={800}
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>

        <div className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;