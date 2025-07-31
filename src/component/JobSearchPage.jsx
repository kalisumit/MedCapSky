import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import JobFilter from "./JobFilter";
import JobList from "./JobList";

const JobSearchPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [jobType, setJobType] = useState(""); // New state

  const jobs = [
    { title: "Nurse At Home", location: "Delhi", department: "Critical Care", type: "Medical" },
    { title: "Physiotherapist", location: "Mumbai", department: "Rehabilitation", type: "Medical" },
    { title: "Lab Technician", location: "Bangalore", department: "Pathology", type: "Medical" },
    { title: "Caregiver", location: "Chennai", department: "Home Care", type: "Medical" },
    { title: "Medical Assistant", location: "Hyderabad", department: "General Practice", type: "Medical" },
    { title: "Frontend Developer", location: "Remote", department: "Frontend Developer", type: "IT" },
    { title: "Backend Developer", location: "Remote", department: "Backend Developer", type: "IT" },
    { title: "React Developer", location: "Remote", department: "Frontend Developer", type: "IT" },
  ];

  const filteredJobs = jobs.filter((job) => {
    const isRemote = job.location.toLowerCase() === "remote";
    const jobMatchesType =
      jobType === "" || (jobType === "Remote" && isRemote) || (jobType === "On-site" && !isRemote);

    const jobMatchesDepartment =
      department === "" ||
      (department === "Medical" && job.type === "Medical") ||
      (department === "Frontend" && job.title.toLowerCase().includes("frontend")) ||
      (department === "Backend" && job.title.toLowerCase().includes("backend"));

    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? job.location.toLowerCase() === location.toLowerCase() : true) &&
      jobMatchesDepartment &&
      jobMatchesType
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <JobFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        department={department}
        setDepartment={setDepartment}
        jobType={jobType}
        setJobType={setJobType}
      />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default JobSearchPage;
