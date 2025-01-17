import React, { useState } from 'react';
import { Search, Filter, Building, MapPin, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const InternshipsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
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
    // Add more internships as needed
  ];

  // Function to handle navigation
  const handleNavigate = (id) => {
    navigate(`/internship/${id}`); // Navigate to profile page with freelancer ID
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search internships..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="ml-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-full md:w-64 bg-gray-800 p-6 rounded-lg h-fit">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Full-time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Part-time</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Duration</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">1-3 months</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">3-6 months</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">6+ months</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Location</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Remote</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">On-site</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Hybrid</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Internships List */}
          <div className="flex-1">
            <div className="grid gap-6">
              {internships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => handleNavigate(internships.id)}
                >
                  <div className="flex items-start">
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{internship.title}</h3>
                          <div className="flex items-center text-gray-400 mb-2">
                            <Building className="h-4 w-4 mr-1" />
                            <span>{internship.company}</span>
                          </div>
                        </div>
                        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {internship.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{internship.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {internship.stipend}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(internship.id);
                    }}
                    className="mt-6 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;