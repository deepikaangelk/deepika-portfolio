import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Side: Text and Contact Links */}
        <div className="contact-info">
          <div className="contact-label">
            <span className="label-line"></span>
            <span className="label-text">Contacts</span>
          </div>
          <h1>Have a project?</h1>
          <h1>Let's talk!</h1>
          
          <div className="contact-links">
            <a 
              href="mailto:deepikark296@gmail.com" 
              className="contact-link email-link"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
              <span>deepikark296@gmail.com</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/deepika-angel-k-460139296/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link linkedin-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side: Decorative or Additional Info */}
        <div className="contact-form-wrapper">
          <div className="contact-visual">
            <div className="contact-icon-large">
              <i className="fas fa-envelope-open"></i>
            </div>
            <p>Get in touch with me through email or LinkedIn</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;