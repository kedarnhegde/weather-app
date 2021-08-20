import React from "react";
import Git from "../assets/git.png";
import LinkedIn from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";
import Phone from "../assets/phone.png";

const Footer = (props) => {
  return (
    <div className=" footer">
      <hr />
      <h5 className="footer-text">Copyright &#169; Kedar Hegde </h5>
      <div className="imgs">
        <a
          href="https://github.com/kedarnhegde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Git}
            alt="githib"
            width="25px"
            height="25px"
            className="mx-3"
          />
        </a>

        <a href=" https://www.linkedin.com/in/kedar-hegde/" target="_blank">
          <img
            src={LinkedIn}
            alt="linkedin"
            width="25px"
            height="25px"
            className="mx-3"
          />
        </a>
        <a href=" mailto:kedarnhegde@gmail.com" target="_blank">
          <img
            src={Gmail}
            alt="gmail"
            width="30px"
            height="25px"
            className="mx-3"
          />
        </a>
        <a href="tel:+919449762733" rel="noopener noreferrer">
          <img
            src={Phone}
            alt="phone"
            width="25px"
            height="25px"
            className="mx-3"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
