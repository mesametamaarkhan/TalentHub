import React, { useState } from "react";
import { Wrench, Pen, DollarSign, FileText, Clock, Pin, User } from "lucide-react";
import axios from "axios";

const InternshipForm = ({ onInternshipAdded }) => {
  const [internship, setInternship] = useState({
    title: "",
    description: "",
    location: "",
    stipend: "",
    duration: "",
    employerId: "",
    skillsRequired: "",
    status: "",
    availableSeats: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "skillsRequired") {
        setInternship({
          ...internship,
          skillsRequired: e.target.value.split(',').map(skill => skill.trim())
        });
      }
      else {
        setInternship({ ...internship, [e.target.name]: e.target.value });
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("accessToken");
        const user = JSON.parse(localStorage.getItem('user'));

        if (!token || !user?.id) {
            console.error("No access token found!");
            return;
        }

        const newInternship = {
            ...internship,
            status: 'OPEN',
            employerId: user.id,
        }

        const response = await axios.post("http://localhost:8080/internships/create-internship", newInternship, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
            onInternshipAdded(response.data.newInternship);
        }
    } 
    catch (error) {
        console.error("Error adding gig:", error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='relative'>
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />    
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            />
        </div>
        <div className="relative">
            <Pen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            ></textarea>
        </div>
        <div className="relative">
            <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                name="skillsRequired"
                placeholder="Skills: e.g., React, Node.js, MongoDB"
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            />
        </div>
        <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="number"
                name="stipend"
                placeholder="Stipend"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg "
                required
            />
        </div>
        <div className="relative">
            <Pin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg "
                required
            />
        </div>
        <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="number"
                name="availableSeats"
                placeholder="Available Seats"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            />
        </div>
        <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="number"
                name="duration"
                placeholder="Duration (months)"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            />
        </div>
        <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded"
        >
            Submit
        </button>
      </form>
  );
};

export default InternshipForm;
