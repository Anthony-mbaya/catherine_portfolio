import React from "react";
import { data } from "../components/projects_data";
import "../components/styles.css";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

export const All_Projects = () => {
  return (
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
  );
};
