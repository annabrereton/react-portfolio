import Logo from '../../images/logo.png';
import Cv from '../../images/Anna-Brereton-CV.pdf';
import {FaDownload} from 'react-icons/fa';
import '../../index.css';

function Home() {
  return (
    <div>
      <main className="home-logo-cv" >
        <img className="home-logo" src={Logo} alt="Anna Brereton logo" />
        <p className="tagline" >Anna Brereton - Web developer</p>
        <div className="cv-download">
          <p className="cv" >CV</p>
          <a className="cv" href={Cv} target="_blank" rel="noopener noreferrer">
            <FaDownload className="download" />
          </a>
        </div>
      </main>
    </div>
  );
}
export default Home;