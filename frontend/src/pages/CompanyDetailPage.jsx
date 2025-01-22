import React, { useState } from 'react';
import { Link as LinkIcon, MapPin, Star, Mail, Phone, Globe } from 'lucide-react';

const CompanyDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock company data
  const company = {
    name: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1584468765589-cb5c0c1abef4',
    industry: 'Technology',
    location: 'San Francisco, CA',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 987-6543',
    website: 'www.techcorp.com',
    description: 'TechCorp is a leading technology firm providing innovative solutions to global clients.',
    stats: {
      employees: 120,
      projects: 200,
      rating: 4.7,
    },
    jobListings: [
      {
        id: 1,
        title: 'Full Stack Developer',
        description: 'Join our team to work on cutting-edge web applications.',
        location: 'San Francisco, CA',
        link: '#'
      },
      // Add more job listings
    ],
    officeLocations: [
      'San Francisco, CA',
      'New York, NY',
      'Berlin, Germany',
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Description Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-white">{company.description}</p>
            </div>

            {/* Company Stats */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Company Stats</h3>
              <div className="flex gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white">Employees</h4>
                  <p className="text-2xl text-white">{company.stats.employees}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white">Projects</h4>
                  <p className="text-2xl text-white">{company.stats.projects}</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white">Rating</h4>
                  <p className="text-2xl text-white">{company.stats.rating} / 5</p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Office Locations</h3>
              <ul className="list-disc pl-5 text-white">
                {company.officeLocations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'jobListings':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.jobListings.map((job) => (
              <div key={job.id} className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-white mb-4">{job.description}</p>
                <a
                  href={job.link}
                  className="text-green-400 hover:text-green-300 inline-flex items-center"
                >
                  View Job <LinkIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={company.image}
              alt={company.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
              <p className="text-white mb-4">{company.industry}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {company.stats.rating} ({company.stats.projects} projects)
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href={`mailto:${company.email}`} className="flex items-center text-white hover:text-green-400">
                  <Mail className="h-4 w-4 mr-1" />
                  {company.email}
                </a>
                <a href={`tel:${company.phone}`} className="flex items-center text-white hover:text-green-400">
                  <Phone className="h-4 w-4 mr-1" />
                  {company.phone}
                </a>
                <a href={`https://${company.website}`} className="flex items-center text-white hover:text-green-400">
                  <Globe className="h-4 w-4 mr-1" />
                  {company.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 relative ${
                  activeTab === 'overview'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('jobListings')}
                className={`py-4 px-1 relative ${
                  activeTab === 'jobListings'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Job Listings
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
