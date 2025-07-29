import React, { useState } from "react";
import Navlink from "../component/navlink.jsx";
import HeroSection from "../component/HeroSection.jsx";
import JobFilter from "../component/JobFilter.jsx";
import JobList from "../component/JobList.jsx";
import Footer from "../component/footer.jsx";
import { useNavigate } from "react-router-dom";

const JobSearchPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const jobs = [
    {
      title: "Nurse At Home",
      location: "Delhi",
      department: "Critical Care",
      type: "Medical",
    },
    {
      title: "Physiotherapist",
      location: "Mumbai",
      department: "Rehabilitation",
      type: "Medical",
    },
    {
      title: "Lab Technician",
      location: "Bangalore",
      department: "Pathology",
      type: "Medical",
    },
    {
      title: "Caregiver",
      location: "Chennai",
      department: "Home Care",
      type: "Medical",
    },
    {
      title: "Medical Assistant",
      location: "Hyderabad",
      department: "General Practice",
      type: "Medical",
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      department: "Software Engineering",
      type: "IT",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      department: "Software Engineering",
      type: "IT",
    },
    {
      title: "React Developer",
      location: "Remote",
      department: "Software Engineering",
      type: "IT",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true) &&
      (department
        ? job.department.toLowerCase().includes(department.toLowerCase())
        : true)
    );
  });

  const navigate = useNavigate();

  const handleJobClick = (job) => {
    console.log("Job clicked:", job);
    // alert("click job card");
    // Navigate to detail page, open modal, etc.
    navigate("/jobApplicayionForm");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navlink />
      <HeroSection />
      <JobFilter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        department={department}
        setDepartment={setDepartment}
      />
      <JobList jobs={filteredJobs} onJobClick={handleJobClick} />
      <Footer />
    </div>
  );
};

export default JobSearchPage;

