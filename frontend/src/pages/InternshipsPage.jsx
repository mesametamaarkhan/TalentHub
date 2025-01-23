import React, { useState } from 'react';
import { Search, Filter, MapPin, ExternalLink, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InternshipsPage = () => {
  const [showFilters, setShowFilters] = useState(true);
  const navigate = useNavigate();

  const internships = [
    {
      id: 1,
      company: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      title: 'Frontend Developer Intern',
      duration: '6 months',
      location: 'Remote',
      stipend: '$1000/month',
      type: 'Full-time',
      description: 'Join our team to work on exciting web projects using React and TypeScript.'
    },
    {
      id: 2,
      company: 'DesignHub',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      title: 'UI/UX Design Intern',
      duration: '3 months',
      location: 'New York, NY',
      stipend: '$800/month',
      type: 'Part-time',
      description: 'Help us create beautiful and intuitive user interfaces for our clients.'
    },
    {
      id: 3,
      company: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      title: 'Frontend Developer Intern',
      duration: '6 months',
      location: 'Remote',
      stipend: '$1000/month',
      type: 'Full-time',
      description: 'Join our team to work on exciting web projects using React and TypeScript.'
    },
    {
      id: 4,
      company: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      title: 'Frontend Developer Intern',
      duration: '6 months',
      location: 'Remote',
      stipend: '$1000/month',
      type: 'Full-time',
      description: 'Join our team to work on exciting web projects using React and TypeScript.'
    },
    // Add more internships as needed
  ];

  const filters = {
    type: ['Full-time', 'Part-time'],
    duration: ['1-3 months', '3-6 months', '6+ months'],
    location: ['Remote', 'On-site', 'Hybrid'],
  };

  const handleNavigate = (id) => {
    navigate(`/internship/${id}`);
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
          <h1 className="text-3xl font-bold mt-4">Internship Opportunities</h1>
          <p className="mt-2 text-white">Enhance your skills by experiencing a professional environment</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search internships..."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleNavigate(internship.id)}
              >
                <div className="relative h-48">
                  <img
                    src={internship.logo}
                    alt={internship.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{internship.title}</h3>
                  <div className="flex items-center text-white mb-4">
                    <span className="bg-green-700 px-3 py-1 rounded-full text-sm">
                      {internship.type}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>

                  <p className="text-white mb-6">{internship.description}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(internship.id);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
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

export default InternshipsPage;
