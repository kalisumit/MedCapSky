import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Use FormData to send file in API if needed
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-30 mb-10 bg-white border rounded-md shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 border rounded"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Cover Letter <span className="text-red-600">*</span>
          </label>
          <textarea
            name="coverLetter"
            className="w-full p-2 border rounded resize-none h-20"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Upload CV/Resume <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-1 border rounded"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Allowed Types: .pdf, .doc, .docx
          </p>
        </div>
        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              className="mr-2 mt-1"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <span className="text-sm text-gray-700">
              By using this form you agree with the storage and handling of your
              data by this website. <span className="text-red-600">*</span>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
