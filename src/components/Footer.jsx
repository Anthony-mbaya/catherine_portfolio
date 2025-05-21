import React from "react";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
  BiHappyHeartEyes,BiSolidEnvelopeOpen
} from "react-icons/bi";
import "./styles.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="hire-me">
        <h1>
          <strong>Catherine</strong> is ready to work with you!
        </h1>
        <span>
          <button>
            <a href="mailto:catherinemigwi33@gmail.com" target="_blank">
              Connect! <BiSolidEnvelopeOpen className="tech-icons" />{" "}
            </a>
          </button>
        </span>
      </div>
      {/*
      <div className="handles">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/anthony-mwakulila-6a4351244/" target="_blank">LinkedIn <BiLogoLinkedin className="tech-icons" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Anthony-mbaya" target="_blank">GitHub <BiLogoGithub className="tech-icons" />{" "}
            </a>
          </li>
          <li>
            <a href="https://x.com/crux_ton" target="_blank">Twitter <BiLogoTwitter className="tech-icons" />{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      */}
    </div>
  );
};
