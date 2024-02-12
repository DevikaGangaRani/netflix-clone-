import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p> Question? call 1-866-547-3274</p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="https://help.netflix.com/en/node/412">FAQ</a>
            </li>
            <li>
              <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/corpinfo">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com/in/browse/genre/839338">
                Netflix Originals
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://help.netflix.com/en/">Help Center</a>
            </li>
            <li>
              <a href="https://jobs.netflix.com/">Jobs</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/termsofuse">
                Terms of use
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/en/contactus">Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Accounts</a>
            </li>
            <li>
              <a href="#">Reedem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="https://fast.com/">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://media.netflix.com/en/">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookies Preferances</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
