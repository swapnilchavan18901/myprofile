import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer123">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>SC</span>
          </h3>

          <p class="footer-links">
            <Link to="/">home</Link> | <Link to="/about">about</Link> |{" "}
            <Link to="/skills">skills</Link> | <Link to="/works">myworks</Link>{" "}
            | <Link to="/contact">contact</Link>
          </p>

          <p class="footer-company-name">
            Copyright © 2021 <strong>SC</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Alibag</span> Raigad
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>(+91) 9175541890</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:swapnilchavan18901@gmail.com">
                swapnilchavan18901@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>A little about me . . .</span>
            <strong></strong>
            I'm from Alibag. I'm currently studying at PHCET khalapur, and I'm
            always looking for new ways to learn and improve my skills. here are
            some ways you can get in touch with me....
          </p>

          <div class="footer-icons">
            <span2 class="sp">get in touch &rarr;</span2>
            <a href="https://www.instagram.com/swapnilchavan1890/">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/swapnil-chavan-0a1a95214/">
              <i class="fa fa-linkedin"></i>
            </a>

            <a href="https://github.com/swapnilchavan18901">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
