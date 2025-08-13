import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCards = ({ job }) => {
  const {
    _id,
    company,
    company_logo,
    description,
    location,
    requirements,
    salaryRange,
    title,
  } = job;
  //   console.log(job);
  return (
    <div className="card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Top Section with Logo & Company Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border-b border-gray-200">
        <figure className="flex-shrink-0">
          <img
            className="w-16 h-16 object-contain rounded-lg"
            src={company_logo}
            alt={company}
          />
        </figure>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-gray-800">{company}</h2>
          <p className="flex items-center gap-2 text-gray-500 text-sm justify-center sm:justify-start">
            <FaMapMarkerAlt className="text-primary" />
            {location}
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
          {title}
          <span className="badge badge-secondary">NEW</span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mt-2">
          <span className="font-medium text-gray-700">Salary:</span>{" "}
          {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>

        <p className="text-gray-600 text-sm sm:text-base mt-3 line-clamp-3">
          {description}
        </p>

        {/* Skills / Requirements */}
        <div className="flex flex-wrap gap-2 mt-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline px-3 py-1 text-sm border-primary text-primary"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex justify-end">
          <Link to={`/jobsDetails/${_id}`}>
            <button className="btn btn-primary px-6 py-2 text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Job Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
