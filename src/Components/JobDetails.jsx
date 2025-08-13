import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaEnvelope, FaUserTie, FaClock } from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    title,
  } = job;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Company Logo */}
        <img
          src={company_logo}
          alt={company}
          className="w-28 h-28 object-contain rounded-lg border border-gray-200"
        />

        {/* Title & Company Info */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            {title}
          </h1>
          <p className="text-lg text-gray-600 font-medium">{company}</p>

          {/* Meta Info */}
          <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> {location}
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="text-primary" /> {jobType}
            </span>
            <span className="flex items-center gap-2">🏷 {category}</span>
          </div>

          {/* Salary & Deadline */}
          <div className="mt-4 text-gray-700">
            <p>
              <strong>💰 Salary:</strong> {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}
            </p>
            <p>
              <strong>⏳ Deadline:</strong> {applicationDeadline}
            </p>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📄 Job Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          ✅ Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 sm:p-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📌 Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0">
          <FaUserTie className="text-5xl text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact HR
          </h2>
          <p className="flex items-center gap-2 text-gray-600">
            <FaUserTie /> {hr_name}
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <FaEnvelope /> {hr_email}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-10 text-center">
        <Link to={`/applyNow/${_id}`}>
          <button className="btn btn-primary px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
