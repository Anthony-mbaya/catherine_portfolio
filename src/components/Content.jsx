import React from "react";
import "./styles.css";
import { data, services } from "./projects_data";
import {
  FaLaptopCode,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
  FaPhp,
} from "react-icons/fa";
import { BiLinkExternal, BiCodeAlt, BiEnvelope } from "react-icons/bi";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

//technologies- language-js,framework-reactjs tailwindcss,tools-cra vite ,vcs-git
//preojs
//courses certifictes degree
export const Content = ({ homeref, servicesref, techref, aboutref }) => {
  const resumeUrl = "/files/Catherine Wangari Migwi_Résumé.docx";
  return (
    <div className="content-container">
      <div className="content-wrapper" ref={homeref}>
        <div className="personal-info">
          <div className="info-text">
            <div className="top-text">
              <h1>
                Hello, <br /><br />
                I'm Dev. Catherine 
              </h1>
            </div>
            <div className="mid-text">
              <p>Crafting digital magic with code</p>
            </div>
            <div className="bottom-text">
              <h2>Software Developer</h2>
              <div>
                <ul className="front-handles">
                  <li>
                    <a href="mailto:catherinemigwi33@gmail.com" target="_blank">
                      <BiEnvelope className="tech-icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="info-image"></div>
        </div>
        <div className="insp">
          <h3>
            Building elegant solutions that spark joy, one pixel at a time
          </h3>
          <h2>
            Code poet & problem solver <span className="text-rose-400">🌸</span>
          </h2>
          <h1 className="ref" ref={servicesref}>
            My Services
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
                    <BiCodeAlt /> print("Build with Cate") <BiCodeAlt />
                  </code>
                </div>
              );
            })}
          </div>
          <div className="insp-btns">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              View Resume <FiArrowUpRight />
            </a>
          </div>
        </div>
        {/*
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
        */}
        <h1 className="ref" ref={techref}>
          Technologies
        </h1>
        <div className="technologies">
          <ul className="technologies-list">
            <li>
              <h2>
                Python <FaPython className="tech-icons" />
              </h2>
              <h1>Versatile programming for any challenge</h1>
              <p>
                Writing clean, efficient code for backend systems, data
                processing, and automation. Experienced in building scalable
                solutions with maintainable architecture.
              </p>
            </li>
            <li>
              <h2>PHP</h2>
              <h1>Dynamic web solutions at scale</h1>
              <p>
                Building robust server-side applications with modern practices.
                Focus on secure, maintainable code for high-performance web
                systems.
              </p>
            </li>
            <li>
              <h2>Java</h2>
              <h1>Enterprise-grade application development</h1>
              <p>
                Creating reliable, high-performance systems with strong type
                safety. Experience in building maintainable architectures for
                complex business logic.
              </p>
            </li>
            <li>
              <h2>MySQL</h2>
              <h1>Structured data management perfected</h1>
              <p>
                Designing efficient database schemas and optimized queries.
                Focus on data integrity, performance tuning, and secure access
                patterns.
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
              Full_Name: <p>Catherine Migwi</p>
            </span> 
            <span>
              School: <p>Mount Kenya University - MKU</p>
            </span>
            <span>
              Bachelors degree:{" "}
              <p>Bachelor of Business and Information Technology - MKU</p>
            </span>
          </div>
          <div className="education">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hi, I'm{" "}
                <span className="text-pink-500  font-bold">
                  Catherine
                </span>
              </h2>

              <div className=" text-slate-400">
                <p className="text-lg mb-4">
                  A passionate software developer who loves turning complex
                  problems into elegant, user-friendly solutions. With a blend
                  of technical expertise and creative thinking, I build digital
                  experiences that are both functional and beautiful.
                </p>

                <div className="space-y-3">
                  <p>
                    <span className="font-medium">My philosophy:</span> Clean
                    code should read like poetry and work like clockwork.
                  </p>
                  <p>
                    When I'm not coding, you'll find me [personal interest -
                    e.g., "exploring new coffee shops", "painting watercolors",
                    or "hiking mountain trails"].
                  </p>
                  <p>
                    Currently focused on [current focus - e.g., "building
                    accessible web applications", "learning about AI
                    integration", or "contributing to open-source projects"].
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*}
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
          </div>*/}
        </div>
      </div>
    </div>
  );
};
