import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Footer.css';

// Import your logo
import clubLogo from '../assets/club-logo.png';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={clubLogo} alt="Entrepreneurship Club Logo" />
            <p>Fostering innovation and entrepreneurship among students.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://startupconclave.ecellvnit.org/">Startup Conclave</a></li>
              <li><a href="https://expo.ecellvnit.org/">Startup Expo</a></li>
              <li><a href="https://www.ecellvnit.org/merchandise/index.php">Merchandise</a></li>
              <li><a href="NEO">NEO</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>For Public Affairs & Communications:</p>
              <a href="mailto:contact@ecellvnit.org">contact@ecellvnit.org</a>
              <p>For Association and Sponsorships:</p>
              <a href="mailto:partners@ecellvnit.org">partners@ecellvnit.org</a>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/ecellvnit/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://m.facebook.com/vnitecell/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://twitter.com/ecell_vnit" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National Institute Of Technology, South Ambazari Road, Abhyankar Nagar, Nagpur-440010</p>
          <p>© {new Date().getFullYear()} Entrepreneurship Club VNIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;