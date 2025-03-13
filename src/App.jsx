import React from "react";
import { HomePage } from "./components/HomePage";
import { All_Projects } from "./ext_page/projects";
import { Hire_Page } from "./ext_page/hire_page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<All_Projects />} />
          <Route path="/hire_me" element={<Hire_Page />} />
        </Routes>
      </Router>
  );
};
