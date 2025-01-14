import { useState } from 'react';
import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const companies = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    industry: 'Software Development',
    location: 'San Francisco, CA',
    description: 'Leading provider of enterprise software solutions with a focus on AI and machine learning.'
  },
  {
    id: 2,
    name: 'DesignLabs Pro',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    industry: 'Design & Creative',
    location: 'New York, NY',
    description: 'Award-winning design agency specializing in digital products and brand experiences.'
  },
  {
    id: 3,
    name: 'DataTech Analytics',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    industry: 'Data Analytics',
    location: 'Boston, MA',
    description: 'Data-driven company providing advanced analytics solutions for businesses worldwide.'
  }
];

const CompaniesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Search Section */}
      <div className="pt-24 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by company name, industry, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div key={company.id} className="bg-secondary rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                      <div className="flex items-center text-gray-300">
                        <FiBriefcase className="mr-1" />
                        <span>{company.industry}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-300 mb-3">
                      <FiMapPin className="mr-1" />
                      <span>{company.location}</span>
                    </div>
                    <p className="text-gray-300">{company.description}</p>
                  </div>
                  <button className="w-full bg-accent hover:bg-accent-light text-white py-2 rounded-md transition-colors">
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

export default CompaniesPage;