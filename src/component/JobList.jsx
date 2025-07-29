//

import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, onJobClick }) => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">Available Jobs</h3>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} onClick={() => onJobClick(job)} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobList;

// function JobList({ jobs, onJobClick }) {
//   return (
//     <div>
//       {jobs.map((job, idx) => (
//         <div
//           key={idx}
//           className="cursor-pointer p-4 border-b hover:bg-gray-100"
//           onClick={() => onJobClick(job)}
//         >
//           <h3 className="font-bold">{job.title}</h3>
//           <p>{job.location} | {job.department}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default JobList;
