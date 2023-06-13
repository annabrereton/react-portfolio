import Logo from "../../images/logo.png";
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
        <h1 className="contact-title">
          Contact me
        </h1>
        <p className="contact-text">
          Please feel free to get in touch via email at annabrereton123@gmail.com, or check out my social media links
          in
          the footer.
        </p>
      <div className="logo-container">
        <img className="contact-logo" src={Logo} alt="Anna Brereton logo" />
      </div>
    </div>
  )
}
  export default Contact;