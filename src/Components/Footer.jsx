import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-heading">Quick Links</h3>
          <nav className="footer-nav">
            <ul className="footer-links">
              <li>
                <a href="/home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/features" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Contact Information</h3>
          <div className="footer-contact">
            <p>Email: contact@yourguide.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Your Guide. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
