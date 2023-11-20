import React from "react";
import footer from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer className={footer.container}>
      <div className={footer.wrapper}>
        <div className={footer.title}>
          <a href="/">PitchKit.</a>
        </div>

        <div className={footer.menu}>
          <div className={footer.item}>
            <h5 className={footer.menu_title}>Section 1</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={footer.item}>
            <h5 className={footer.menu_title}>Section 2</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={footer.item}>
            <h5 className={footer.menu_title}>Section 3</h5>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={footer.social}>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className={footer.copyright}>
        <p>@ Zakaria Lahgaz</p>
      </div>
    </footer>
  );
};

export default Footer;
