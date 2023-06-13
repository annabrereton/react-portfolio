import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-links" aria-label="contact-links">
        <a href = "mailto: annabrereton123.com" aria-label="email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/annabrereton" aria-label="github">
          <FaGithub />
        </a>
        <a href="https://uk.linkedin.com/" className="email-link" aria-label="linkedin">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
export default Footer;