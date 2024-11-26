/* eslint-disable no-unused-vars */
import React from "react";
import {NavLink} from 'react-router-dom'

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Building responsive, visually appealing, and user-friendly websites using modern front-end technologies.",
  },
  {
    id: 2,
    title: "Single Page Applications",
    description:
      "Creating dynamic and fast-loading single-page applications using React and JavaScript libraries.",
  },
  {
    id: 3,
    title: "Web Performance Optimization",
    description:
      "Improving website speed and performance for a seamless and efficient user experience.",
  },
  {
    id: 4,
    title: "Responsive Design",
    description:
      "Ensuring your website adapts perfectly to any screen size, from desktops to mobile devices.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              {/* Service ID */}
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
                {service.id}
              </div>

              {/* Service Title */}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="mt-4 text-gray-400">{service.description}</p>

              {/* More Info Link */}
              <NavLink
              to="/"
                className="mt-6 inline-block from-orange-300 to-red-400 transition-colors duration-300"
              >
                Get more info
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
