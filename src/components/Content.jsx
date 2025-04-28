import React from "react";
import "./styles.css";
import { data, services } from "./projects_data";
import { FaLaptopCode, FaJsSquare, FaReact, FaPython, FaDocker, FaAws, FaPhp } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoGit,
  BiLinkExternal,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoTwitter,
  BiCodeAlt,
} from "react-icons/bi";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { RiNextjsFill } from "react-icons/ri";
import { SiCreatereactapp, SiDjango, SiVercel, SiVite } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

//technologies- language-js,framework-reactjs tailwindcss,tools-cra vite ,vcs-git
//preojs
//courses certifictes degree
export const Content = ({
  homeref,
  servicesref,
  projectsref,
  techref,
  aboutref,
}) => {
  const resumeUrl = "/files/Developer Tonny Resume.pdf";
  const cvUrl = "/files/ANTHONY_MBAYA_CV.pdf"
  return (
    <div className="content-container">
      <div className="content-wrapper" ref={homeref}>
        <div className="personal-info">
          <div className="info-text">
            <div className="top-text">
              <h1>
                Here is! ~Dev Tonny~
                <FaLaptopCode className="lap" />
              </h1>
            </div>
            <div className="mid-text">
              <p>Turning ideas into scalable, user-friendly applications</p>
            </div>
            <div className="bottom-text">
              <h2>Full Stack Developer</h2>
              <div>
                <ul className="front-handles">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anthony-mwakulila-6a4351244/"
                      target="_blank"
                    >
                      <BiLogoLinkedin className="tech-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Anthony-mbaya" target="_blank">
                      <BiLogoGithub className="tech-icons" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/crux_ton" target="_blank">
                      <BiLogoTwitter className="tech-icons" />{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="info-image"></div>
        </div>
        <div className="insp">
          <h3>Driven by curiosity, powered by code!</h3>
          <h2>
            Full Stack Developer | Turning ideas into scalable, user-friendly
            applications
          </h2>
          <h1 className="ref" ref={servicesref}>
            What I Do
          </h1>
          <div className="services">
            {services.map((service) => {
              return (
                <div key={service.id} className="service">
                  <span>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </span>

                  <code className="code">
                    <BiCodeAlt /> print("Build with Tonny") <BiCodeAlt />
                  </code>
                </div>
              );
            })}
          </div>
          <div className="insp-btns">
          <a href={cvUrl} target="_blank" rel="noopener noreferrer">
              View CV <FiArrowUpRight />
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              View Resume <FiArrowUpRight />
            </a>
          </div>
        </div>
        <h1 className="ref" ref={projectsref}>
          Latest Work
        </h1>
        <section className="flex flex-col gap-10 mt-4 container mx-auto px-3">
        <div className="projects">
          {data.slice(0, 4).map((project) => {
            return (
              <div className="project" key={project.id}>
                <div className="project-image">
                  <img src={project.projImg} alt="desktop-image" />
                </div>
                <div className="project-info">
                  <h2>{project.projName}</h2>
                  <span>
                    <button className="vercel">
                      <a href={project.projVercel} target="_blank">
                        visit <FiArrowUpRight className="link-icons" />{" "}
                      </a>
                    </button>
                    <button className="github">
                      <a href={project.projGithub} target="_blank">
                        Code <FiCode className="link-icons" />{" "}
                      </a>
                    </button>
                  </span>
                </div>
                <div className="desc">
                  <div className="stack">{project.stack}</div>
                  {project.projDesc}
                </div>
              </div>
            );
          })}
          </div>
          <div className="insp-btns">
            <Link to={'/projects'}>
              View More Projects <FiArrowUpRight />
            </Link>
</div>
        </section>
        <h1 className="ref" ref={techref}>
          Technologies
        </h1>
        <div className="technologies">
          <ul className="technologies-list">
            <li>
              <h2>Languages</h2>
              <h1>
              Python <FaPython className="tech-icons" />
                JavaScript <FaJsSquare className="tech-icons" />
                PHP <FaPhp className="tech-icons" />
              </h1>
              <p>
                I use these as my <strong>primary language</strong> in developing
               applications.
              </p>
            </li>
            <li>
              <h2>Frameworks</h2>
              <h1>
                Django <SiDjango className="tech-icons" />
                ReactJS <FaReact className="tech-icons" />
                NextJS <RiNextjsFill className="tech-icons" />
                TailwindCss <BiLogoTailwindCss className="tech-icons" />
              </h1>
              <p>
                Make my development easier and classic with it's vast{" "}
                <strong>packages</strong>.
              </p>
            </li>
            <li>
              <h2>Tools</h2>
              <h1>
              Docker <FaDocker className="tech-icons" />
                Vite <SiVite className="tech-icons" />
               CRA <SiCreatereactapp className="tech-icons" />
               </h1>
              <p>
                I use these tools often in running my development as well as to
                fasten completion.
              </p>
            </li>
            <li>
              <h2>Version Control System</h2>
              <h1>
                Git <BiLogoGit className="tech-icons" />{" "}
                Github <FaGithubAlt className="tech-icons" />
              </h1>
              <p>
                I use Git is a version control system for tracking changes in
                computer files and coordinating my work along and Github for hosting my code.{" "}
              </p>
            </li>
            <li>
              <h2>Hosting</h2>
              <h1>Vercel <SiVercel className="tech-icons" />
               AWS <FaAws className="tech-icons" />
               </h1>
              <p>
                I use these hosting sites in hosting my softwares online.
                Cloud hosting and serverless functions. They provide affordable services.
              </p>
            </li>
          </ul>
        </div>
        <h1 className="ref" ref={aboutref}>
          About
        </h1>
        <div className="about">
          <div className="about-text">
            <span>
              Full_Name: <p>Anthony Mbaya</p>
            </span>
            <span>
              Hobby: <p>Coding,  Hiking,Watching documentaries, Playing card games, Contributing to open-source projects</p>
            </span>
            <span>
              School:{" "}
              <p>Mount Kenya University - MKU</p>
            </span>
            <span>
              Pursuing(degree):{" "}
              <p>Bachelor of Business and Information Technology - MKU</p>
            </span>
          </div>
          <div className="education">
            <h2>Certifications</h2>
            <ul>
              <li>
                1. Responsive-Web-Design{" "}
                <a
                  href="https://www.freecodecamp.org/certification/fccee5fff4d-7fac-4c7b-857f-af75a8d8b1b1/responsive-web-design"
                  target="_blank"
                >
                  <BiLinkExternal />
                </a>
              </li>
              <li>
                2. Javascript-Algorithms-and-Data-Structures{" "}
                <a
                  href="https://www.freecodecamp.org/certification/fccee5fff4d-7fac-4c7b-857f-af75a8d8b1b1/javascript-algorithms-and-data-structures-v8"
                  target="_blank"
                >
                  <BiLinkExternal />
                </a>
              </li>
              <li>
                3. Legacy Javascript-Algorithms-and-Data-Structures{" "}
                <a
                  href="https://www.freecodecamp.org/certification/fccee5fff4d-7fac-4c7b-857f-af75a8d8b1b1/javascript-algorithms-and-data-structures"
                  target="_blank"
                >
                  <BiLinkExternal />
                </a>
              </li>
            </ul>
             <Link to={'/hire_me'} className="get-btn" >Get In Touch <MdEmail size={17} /> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
