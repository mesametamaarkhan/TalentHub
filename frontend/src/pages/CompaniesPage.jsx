import React from 'react';
import { Search, MapPin, Users, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CompaniesPage = () => {
  const navigate = useNavigate();
  const companies = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      industry: 'Software Development',
      location: 'San Francisco, CA',
      employees: '1000+',
      description: 'Leading software development company specializing in enterprise solutions.'
    },
    {
      id: 2,
      name: 'DesignHub',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      industry: 'Design & Creative',
      location: 'New York, NY',
      employees: '500+',
      description: 'Award-winning design agency creating beautiful digital experiences.'
    },
    {
      id: 3,
      name: 'DesignHub',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      industry: 'Design & Creative',
      location: 'New York, NY',
      employees: '500+',
      description: 'Award-winning design agency creating beautiful digital experiences.'
    },
    {
      id: 4,
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      industry: 'Software Development',
      location: 'San Francisco, CA',
      employees: '1000+',
      description: 'Leading software development company specializing in enterprise solutions.'
    }
    // Add more companies as needed
  ];

  const handleNavigate = (id) => {
    navigate(`/company/${id}`); 
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative w-full md:w-96 mb-8">
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full bg-black border border-black rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-black"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigate(companies.id)}
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
                      handleNavigate(companies.id);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  View Profile
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;