import React, { useEffect, useState } from "react";
import JobCards from "./JobCards";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-server-khaki-phi.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mb-7">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4 sm:my-5 md:my-6">
        🔥 Trending Hot Jobs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {jobs.map((job) => (
          <JobCards key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
