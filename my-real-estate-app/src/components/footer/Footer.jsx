import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/about">About SGWEstate</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/advertising">Display advertising</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>

        {/* Footer Legal Section */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <Link to="/terms">Terms</Link>
          <Link to="/member-terms">Member terms</Link>
          <Link to="/slavery-statement">Slavery statement</Link>
          <Link to="/tax-strategy">Tax strategy</Link>
          <Link to="/press">Press</Link>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.png" alt="Instagram" />
            </a>
            <a href="" target="" rel="noopener noreferrer">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2024 SGWEstate Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
