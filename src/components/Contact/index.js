import Logo from "../../images/logo.png";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>
          Contact me
        </h1>
        <p className="contact-text">
          Please feel free to get in touch via email at place-holder-email@gmail.com, or check out my social media links
          in
          the footer.
        </p>
      </div>
      <div className="contact-logo">
        <img src={Logo} alt="Anna Brereton logo" />
      </div>
    </div>
  )
}
  export default Contact;