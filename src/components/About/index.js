import ProfilePhoto from '../../images/profile-photo.png';

function About() {
  return (
    <div className="about-me">
      <h1>
        About me
      </h1>
      <img id="profile-photo" src={ProfilePhoto} alt="Anna Brereton"/>
      <p id="blurb">
        Hello, world!
        I'm Anna, a full stack student at iO Academy. Code is like magic, using words to create something out of
        seemingly nothing. My brain loves to problem solve and come up with creative and efficient solutions.
      </p>
    </div>
  );
}
export default About;