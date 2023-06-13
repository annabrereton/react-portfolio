import { Link } from 'react-router-dom';
import './navigation.css';
import { FaHome } from 'react-icons/fa';

function Navigation() {
  return (
    <div className="nav-container">
      <nav aria-label="main-navigation">
        <ul className="menu-buttons">
          <li>
            <Link to="/" aria-label="home" className="menu-item">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/about" aria-label="about" className="menu-item">About</Link>
          </li>
          <li>
            <Link to="/portfolio" aria-label="portfolio" className="menu-item">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" aria-label="contact" className="menu-item">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;