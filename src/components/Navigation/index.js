import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Navigation() {
  return (
    <div className="nav-container">
      <nav aria-label="main navigation">
        <ul className="menu-buttons">
          <li>
            <Link to="/" aria-label="home">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;