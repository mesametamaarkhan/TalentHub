import React, { useState } from 'react';
import { Search, MapPin, Users, ExternalLink, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CompaniesPage = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true); // State to toggle the filter sidebar

  const companies = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      industry: 'Software Development',
      location: 'San Francisco, CA',
      employees: '1000+',
      description: 'Leading software development company specializing in enterprise solutions.',
    },
    {
      id: 2,
      name: 'DesignHub',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      industry: 'Design & Creative',
      location: 'New York, NY',
      employees: '500+',
      description: 'Award-winning design agency creating beautiful digital experiences. anognoasngo',
    },
    {
      id: 3,
      name: 'InnoTech',
      logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80',
      industry: 'Tech Innovation',
      location: 'Austin, TX',
      employees: '200+',
      description: 'Innovative tech company focused on groundbreaking solutions. aongsoasngoan',
    },
    {
      id: 4,
      name: 'InnoTech',
      logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80',
      industry: 'Tech Innovation',
      location: 'Austin, TX',
      employees: '200+',
      description: 'Innovative tech company focused on groundbreaking solutions.',
    },
  ];

  const filters = {
    industry: ['Software Development', 'Design & Creative', 'AI/ML', 'Cybersecurity'],
    location: ['Remote', 'San Francisco, CA', 'New York, NY'],
    employees: ['1-50', '51-200', '201-500', '500+'],
  };

  const handleNavigate = (id) => {
    navigate(`/company/${id}`);
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
          <h1 className="text-3xl font-bold mt-4">Companies</h1>
          <p className="mt-2 text-white">Some catchy line for this</p>
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
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleNavigate(company.id)}
              >
                <div className="relative h-48">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                  <div className="flex items-center text-white mb-4">
                    <span className="bg-green-700 px-3 py-1 rounded-full text-sm">
                      {company.industry}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{company.employees}</span>
                    </div>
                  </div>

                  <p className="text-white mb-6">{company.description}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(company.id);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    View Profile
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

export default CompaniesPage;