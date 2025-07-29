// 


import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
      <h4 className="text-base sm:text-lg font-bold">{job.title}</h4>
      <p className="text-gray-600 text-sm sm:text-base">
        {job.location} | {job.department}
      </p>
      <span className="inline-block mt-2 text-xs sm:text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
        {job.type} Job
      </span>
    </div>
  );
};

export default JobCard;
