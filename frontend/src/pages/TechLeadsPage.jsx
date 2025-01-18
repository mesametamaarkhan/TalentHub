import React, { useState } from 'react';
import { Search, Grid, List, MapPin, Building, Clock, DollarSign, Briefcase, Filter, TreePine } from 'lucide-react';
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
      position: 'Technical Campus Lead',
      location: 'San Francisco, CA',
      type: 'Hybrid',
      experience: '2+ years',
      stipend: '$5000/month',
      duration: '12 months',
      industry: 'Software Development',
      responsibilities: [
        'Lead technical workshops and training sessions',
        'Represent company at campus events',
        'Mentor student developers',
      ],
    },
    {
      id: 2,
      company: 'GreenTech Innovations',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      position: 'Tech Community Representative',
      location: 'Remote',
      type: 'Remote',
      experience: '3+ years',
      stipend: '$6000/month',
      duration: '24 months',
      industry: 'AI/ML',
      responsibilities: [
        'Build and nurture tech communities',
        'Organize hackathons and coding competitions',
        'Create technical content and documentation',
      ],
    },
    // Add more tech lead positions as needed
  ];

  const filters = {
    industry: ['Software Development', 'AI/ML', 'Cloud Computing', 'Cybersecurity'],
    location: ['Remote', 'Hybrid', 'On-site'],
    experience: ['1+ years', '2+ years', '3+ years', '5+ years'],
    duration: ['6 months', '12 months', '24 months'],
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mt-4">Tech Leadership Opportunities</h1>
          <p className="mt-2 text-white">Lead the next generation of tech innovation</p>
        </motion.div>

        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search positions..."
              className="w-full bg-black border border-white rounded-lg py-2 px-4 pl-10 focus:ring-white focus:ring-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg ${showFilters ? 'bg-green-600' : 'bg-black'} transition-colors`}
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="pb-10 flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full bg-black md:w-64 glass-effect rounded-lg p-6 h-fit"
            >
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-sm font-medium mb-2 capitalize">{category}</h4>
                  <div className="space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="form-checkbox rounded text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-400">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tech Leads Grid/List */}
          <div className="pb-10 flex-1 grid gap-6 grid-cols-1">
            {techLeads.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={position.logo}
                      alt={position.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{position.position}</h3>
                      <div className="flex items-center text-green-400 mb-2">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{position.company}</span>
                      </div>
                    </div>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-white">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.duration}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.stipend}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-white text-sm space-y-1">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLeadsPage;