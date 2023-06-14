import Logo from "../../images/logo.png";
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
        <p className="contact-text">
          Please feel free to get in touch via <a href = "mailto: annabrereton123.com" className="email-link" aria-label="email">email,</a> or check out my social media links
          in the footer.
        </p>
      <div className="logo-container">
        <img className="contact-logo" src={Logo} alt="Anna Brereton logo" />
      </div>
    </div>
  )
}
  export default Contact;