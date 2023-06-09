import ProfilePhoto from '../../images/profile-photo.png';
import '../../about.css';

function About() {
  return (
    <div>
      <main className="about-me-container">
        <h1>
          About me
        </h1>
        <div className="photo-container" >
          <img className="profile-photo" src={ProfilePhoto} alt="Anna Brereton"/>
        </div>
        <p className="blurb">
          Hello, world!
          I'm Anna, a full stack student at iO Academy. Code is like magic, using words to create something out of
          seemingly nothing. My brain loves to problem solve and come up with creative and efficient solutions.
        </p>
      </main>
    </div>
  );
}
export default About;