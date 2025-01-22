import React, { useState } from 'react';
import { Search, Building, MapPin, Clock, DollarSign, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TechLeadsPage = () => {
  const [showFilters, setShowFilters] = useState(true);
  const navigate = useNavigate();

  const techLeads = [
    {
      id: 1,
      company: 'EcoTech Solutions',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      title: 'Technical Campus Lead',
      location: 'San Francisco, CA',
      type: 'Hybrid',
      duration: '12 months',
      stipend: '$5000/month',
      description: 'Lead technical workshops, represent our brand, and mentor student developers.',
    },
    {
      id: 2,
      company: 'GreenTech Innovations',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      title: 'Tech Community Representative',
      location: 'Remote',
      type: 'Remote',
      duration: '24 months',
      stipend: '$6000/month',
      description: 'Build tech communities and organize events to drive innovation.',
    },
    // Add more tech lead positions as needed
  ];

  const handleNavigate = (id) => {
    navigate(`/techlead/${id}`);
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
          <h1 className="text-3xl font-bold mt-4">Tech Leadership Opportunities</h1>
          <p className="mt-2 text-white">Explore roles to lead and inspire the tech community</p>
        </motion.div>

        {/* Search and Filter Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search tech leads..."
              className="w-full bg-black border border-white rounded-lg py-2 px-4 pl-10 focus:ring-white focus:ring-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>

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
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox rounded text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-400">Remote</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox rounded text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-400">Hybrid</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Duration</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox rounded text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-400">6 months</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox rounded text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-gray-400">12 months</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tech Leads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {techLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleNavigate(lead.id)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={lead.logo}
                      alt={lead.company}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{lead.title}</h3>
                      <div className="flex items-center text-gray-400">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="text-sm">{lead.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-4">{lead.description}</p>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{lead.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{lead.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-sm">{lead.stipend}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(lead.id);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Apply Now
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

export default TechLeadsPage;