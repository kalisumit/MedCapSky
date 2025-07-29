// import React from "react";

// const JobFilter = ({ search, setSearch, location, setLocation, department, setDepartment }) => {
//   return (
//     <section className="p-6 max-w-4xl mx-auto">
//       <h3 className="text-xl font-semibold mb-4">Search for Jobs</h3>
//       <div className="grid md:grid-cols-3 gap-4">
//         <input
//           type="text"
//           placeholder="Search by job title"
//           className="p-2 border rounded"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Filter by location"
//           className="p-2 border rounded"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Filter by department"
//           className="p-2 border rounded"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//         />
//       </div>
//     </section>
//   );
// };

// export default JobFilter;


import React from "react";

const JobFilter = ({ search, setSearch, location, setLocation, department, setDepartment }) => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
        Search for Jobs
      </h3>

      {/* ✅ Responsive Inputs */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          placeholder="Search by job title"
          className="p-3 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location"
          className="p-3 border rounded w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by department"
          className="p-3 border rounded w-full"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
    </section>
  );
};

export default JobFilter;

