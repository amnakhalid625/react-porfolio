/* eslint-disable no-unused-vars */
import React from "react";
import {NavLink} from 'react-router-dom'
import cosmeticImage from "../assets/cosmetic webstie.jpg";
import medicalPic from "../assets/medical convert.jpg";
import passwordGenerator from "../assets/password generator.jpg";

const projects = [
  {
    id: 1,
    name: "Cosmetic Products",
    technology: "HTML, CSS & JavaScript",
    image: cosmeticImage,
    github: "https://github.com/amnakhalid625/CosmeticWebsite.git",
  },
  {
    id: 2,
    name: "Medical Website",
    technology: "HTML & CSS",
    image: medicalPic,
    github: "https://github.com/amnakhalid625/my-final-project/tree/main",
  },
  {
    id: 3,
    name: "Password Generator",
    technology: "React & Tailwind CSS",
    image: passwordGenerator,
    github: "https://github.com/amnakhalid625/react/tree/main/pass_gen/password_generator",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl transform transition-transform
               duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover shadow-lg"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

              {/* Technology Used */}
              <p className="text-gray-400 mb-4">{project.technology}</p>

              {/* GitHub Link
              <NavLink
              to={project.github}
                className="inline-block bg-gradient-to-r from-orange-300 to-red-400 text-white px-4 py-2 rounded-full
                transform transition-transform duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </NavLink> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
