import React, { useState } from "react";
import { Wrench, Pen, DollarSign, FileText, Clock, Tag } from "lucide-react";
import axios from "axios";

const GigForm = ({ onGigAdded }) => {
  const [gig, setGig] = useState({
    title: "",
    description: "",
    budget: "",
    employerId: "",
    category: "",
    duration: "",
    skillsRequired: "",
    status: "",
    postedDate: "",
  });

  const handleChange = (e) => {
    setGig({ ...gig, [e.target.name]: e.target.value });
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

        const newGig = {
            ...gig,
            status: 'OPEN',
            postedDate: new Date().toISOString(), 
            employerId: user.id,
        }

        const response = await axios.post("http://localhost:8080/gigs/create-gig", newGig, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 201) {
            onGigAdded(response.data.newGig);
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
                onChange={(e) => setGig({ ...gig, skillsRequired: e.target.value.split(',').map(skill => skill.trim())})}
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-white rounded-lg"
                required
            />
        </div>
        <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="number"
                name="budget"
                placeholder="Budget"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg "
                required
            />
        </div>

        <div className="relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="text"
                name="category"
                placeholder="Category"
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg "
                required
            />
        </div>

        <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            <input
                type="number"
                name="duration"
                placeholder="Duration (no of days)"
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

export default GigForm;
