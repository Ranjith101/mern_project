import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Travel Planner. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;