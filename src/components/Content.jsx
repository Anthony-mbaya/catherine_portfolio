import React from "react";
import "./styles.css";
import { data } from "./projects_data";
import { FaLaptopCode, FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoGit, BiHappyHeartEyes,BiLinkExternal, BiLogoLinkedin,BiLogoGithub,BiLogoTwitter } from "react-icons/bi";
//technologies- language-js,framework-reactjs tailwindcss,tools-cra vite ,vcs-git
//preojs
//courses certifictes degree
export const Content = ({ homeref, aboutref, techref, projectsref }) => {
  return (
    <div className="content-container">
      <div className="content-wrapper" ref={homeref}>
        <div className="personal-info">
          <div className="info-text">
            <div className="top-text">
              <h1>
                Here is! ~Dev. Tonny~
                <FaLaptopCode className="lap" />
              </h1>
            </div>
            <div className="bottom-text">
              <p>Proficient in: </p>
              <h2>Frontend Development</h2>
              <div>
                <ul className="front-handles">
                    <li><a href="https://www.linkedin.com/in/anthony-mwakulila-6a4351244/" target="_blank"><BiLogoLinkedin className='tech-icons' /></a></li>
                    <li><a href="https://github.com/Anthony-mbaya" target="_blank"><BiLogoGithub className='tech-icons' /> </a></li>
                    <li><a href="https://x.com/crux_ton" target="_blank"><BiLogoTwitter className='tech-icons' /> </a> </li>
                </ul>
            </div>
            </div>
          </div>
          <div className="info-image"></div>
        </div>
        <h1 className="my-proj" ref={projectsref}>
          My Projects
        </h1>
        <div className="projects">
          {data.map((project) => {
            return (
              <div className="project" key={project.id}>
                <div className="project-image">
                  <img src={project.projImg} alt="desktop-image" />
                </div>
                <div className="project-info">
                  <h2>{project.projName}</h2>
                  <span>
                    <button className="vercel">
                      <a href={project.projVercel} target="_blank" >
                        Open <BiHappyHeartEyes className="link-icons" />{" "}
                      </a>
                    </button>
                    <button className="github">
                      <a href={project.projGithub} target="_blank">
                        Code <FaLaptopCode className="link-icons" />{" "}
                      </a>
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="my-proj" ref={techref}>
          Technologies
        </h1>
        <div className="technologies">
          <ul className="technologies-list">
            <li>
              <h2>Language(s)</h2>
              <h1>
                JavaScript <FaJsSquare className="tech-icons" />{" "}
              </h1>
              <p>
                I use this as my <strong>primary language</strong> in developing
                frontend apps.
              </p>
            </li>
            <li>
              <h2>Frameworks</h2>
              <h1>
                ReactJS <FaReact className="tech-icons" /> , TailwindCss{" "}
                <BiLogoTailwindCss className="tech-icons" />{" "}
              </h1>
              <p>
                Make my development easier and classic with it's vast{" "}
                <strong>packages</strong>.
              </p>
            </li>
            <li>
              <h2>Tools</h2>
              <h1>Vite, CRA</h1>
              <p>
                I use this tools often in running my development as well as to
                fasten completion.
              </p>
            </li>
            <li>
              <h2>VCS</h2>
              <h1>
                Git <BiLogoGit className="tech-icons" />{" "}
              </h1>
              <p>
                I use Git is a version control system for tracking changes in
                computer files and coordinating my work along.{" "}
              </p>
            </li>
          </ul>
        </div>
        <h1 className="my-proj" ref={aboutref}>
          About
        </h1>
        <div className="about">
          <div className="about-text">
            <span>
              Full_Name: <strong>Anthony Mbaya</strong>
            </span>
            <span>
              Age: <strong>20</strong> Yrs
            </span>
            <span>
              Hobby: <strong>Coding</strong>
            </span>
            <span>
              Pursuing:{" "}
              <strong>Bachelor of Business Information Technology - MKU</strong>
            </span>
          </div>
          <div className="education">
            <h2>Certifications</h2>
            <ul>
              <li>
                1. Responsive-Web-Design <a href="https://www.freecodecamp.org/certification/fccee5fff4d-7fac-4c7b-857f-af75a8d8b1b1/responsive-web-design" target="_blank">
                  <BiLinkExternal />
                </a>
              </li>
              <li>
                2. Javascript-Algorithms-and-Data-Structures <a
                  href="https://www.freecodecamp.org/certification/fccee5fff4d-7fac-4c7b-857f-af75a8d8b1b1/javascript-algorithms-and-data-structures-v8"
                  target="_black"
                >
                  <BiLinkExternal />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
