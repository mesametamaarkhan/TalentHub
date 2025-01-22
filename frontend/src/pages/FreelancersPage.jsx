import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FreelancersPage = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true); // State to toggle the filter sidebar

  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      skills: ['React', 'Node.js', 'TypeScript'],
      rating: 4.9,
      location: 'San Francisco, CA',
      experience: '5 years',
      bio: 'Full-stack developer specializing in React and Node.js applications.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      skills: ['UI/UX', 'Figma', 'Adobe XD'],
      rating: 4.8,
      location: 'New York, NY',
      experience: '4 years',
      bio: 'Creative UI/UX designer with a passion for user-centered design.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      skills: ['UI/UX', 'Figma', 'Adobe XD'],
      rating: 4.8,
      location: 'New York, NY',
      experience: '4 years',
      bio: 'Creative UI/UX designer with a passion for user-centered design.'
    },
    {
      id: 4,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      skills: ['UI/UX', 'Figma', 'Adobe XD'],
      rating: 4.8,
      location: 'New York, NY',
      experience: '4 years',
      bio: 'Creative UI/UX designer with a passion for user-centered design.'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      skills: ['React', 'Node.js', 'TypeScript'],
      rating: 4.9,
      location: 'San Francisco, CA',
      experience: '5 years',
      bio: 'Full-stack developer specializing in React and Node.js applications.'
    },
    // Add more freelancers as needed
  ];

  const filters = {
    skills: ['React', 'Figma', 'Node.js', 'UI/UX'],
    experience: ['2 years', '3 years', '4 years'],
    rating: ['1', '2', '3', '4', '5'],
  };

  const handleNavigate = (id) => {
    navigate(`/freelancer/${id}`);
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mt-4">Freelancers</h1>
          <p className="mt-2 text-white">Hire freelancers for your work</p>
        </motion.div>

        {/* Search Bar and Filter Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full bg-black border border-white rounded-lg py-2 px-4 pl-10 focus:ring-white focus:ring-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg ${showFilters ? 'bg-green-600' : 'bg-black'} transition-colors`}
          >
            <Filter className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full bg-black md:w-64 rounded-lg p-6 glass-effect h-fit"
            >
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-sm font-medium mb-2 capitalize">{category}</h4>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-400">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {freelancers.map((freelancer) => (
              <div
                key={freelancer.id}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleNavigate(freelancer.id)}
              >
                <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={freelancer.image}
                        alt={freelancer.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold">{freelancer.name}</h3>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{freelancer.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-2">{freelancer.rating}</span>
                        <span className="mx-2">•</span>
                        <Briefcase className="h-4 w-4" />
                        <span className="ml-2">{freelancer.experience}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{freelancer.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {freelancer.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-green-700 text-sm px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(freelancer.id);
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancersPage;