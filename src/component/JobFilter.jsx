// 


import React from "react";

const JobFilter = ({
  search,
  setSearch,
  location,
  setLocation,
  department,
  setDepartment,
  jobType,
  setJobType,
}) => {
  const locations = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Remote"];
  const departments = ["Medical", "Frontend", "Backend"];
  const jobTypes = ["Remote", "On-site"];

  return (
    <div className="bg-white p-4 rounded shadow-md mx-auto max-w-5xl mt-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Title Search */}
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />

        {/* Location Dropdown */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Department Dropdown */}
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Departments</option>
          <option value="Medical">Medical Job</option>
          <option value="Frontend">Front-end Job</option>
          <option value="Backend">Back-end Job</option>
        </select>

        {/* Job Type Dropdown */}
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Types</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Reset Button (Optional) */}
        <button
          onClick={() => {
            setSearch("");
            setLocation("");
            setDepartment("");
            setJobType("");
          }}
          className="p-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
