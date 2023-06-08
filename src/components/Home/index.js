import Logo from '../../images/logo.png';
import Cv from '../../images/cv.pdf';
function Home() {
  return (
    <div>
      <main>
        <div className="home-logo">
          <img src={Logo} alt="Anna Brereton logo" />
        </div>
        <p>Anna Brereton - Web developer</p>
        <div className="cv-download">
          <a className="cv" href={Cv} target="_blank" rel="noopener noreferrer">CV
            <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </main>
    </div>
  );
}
export default Home;