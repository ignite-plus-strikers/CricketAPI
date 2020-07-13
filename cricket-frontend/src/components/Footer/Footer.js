import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <ul className="list-unstyled">
              <h6>STOREVA INC.</h6>
              <li>342-420-6569</li>
              <li>Bangalore, India</li>
              <li>123 Street South North</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col">
            <ul className="list-unstyled">
              <h6>Product</h6>
              <li>
                <a href="/" style={{ color: "#A0A4A5" }}>
                  News
                </a>
              </li>
              <li>
                <a href="/about" target="_blank" style={{ color: "#A0A4A5" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "#A0A4A5" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" style={{ color: "#A0A4A5" }}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col">
            <ul className="list-unstyled">
              <h6>Connect With Us</h6>
              <li>
                <a href="/" style={{ color: "#A0A4A5" }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#A0A4A5" }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/login"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#A0A4A5" }}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: "#A0A4A5" }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="row">
            <hr />
            <p className="col">
              &copy;{new Date().getFullYear()} StoreEva | All Rights Reserved |
              Terms of Services | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
