import React, { useState } from 'react';
import { User, Briefcase, Link as LinkIcon, Star, MapPin, Mail, Phone, Globe } from 'lucide-react';

const FreelancerDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const freelancer = {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    website: 'www.sarahjohnson.dev',
    bio: 'Passionate full-stack developer with 5+ years of experience in building scalable web applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    rating: 4.9,
    completedProjects: 45,
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Built a full-featured e-commerce platform using MERN stack.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
        link: '#'
      },
      // Add more portfolio items
    ],
    workHistory: [
      {
        id: 1,
        company: 'TechCorp',
        role: 'Senior Developer',
        duration: '2020 - Present',
        description: 'Led development of multiple high-impact projects.'
      },
      // Add more work history items
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Bio Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-white">{freelancer.bio}</p>
            </div>

            {/* Skills Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {freelancer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Work History */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Work History</h3>
              <div className="space-y-6">
                {freelancer.workHistory.map((work) => (
                  <div key={work.id} className="border-l-2 border-green-600 pl-4">
                    <h4 className="font-semibold">{work.role}</h4>
                    <p className="text-green-400">{work.company}</p>
                    <p className="text-sm text-white">{work.duration}</p>
                    <p className="mt-2 text-white">{work.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freelancer.portfolio.map((project) => (
              <div key={project.id} className="bg-black rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-green-400 hover:text-green-300 inline-flex items-center"
                  >
                    View Project <LinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
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
        {/* Profile Header */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{freelancer.name}</h1>
              <p className="text-white mb-4">{freelancer.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {freelancer.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {freelancer.rating} ({freelancer.completedProjects} projects)
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href={`mailto:${freelancer.email}`} className="flex items-center text-white hover:text-green-400">
                  <Mail className="h-4 w-4 mr-1" />
                  {freelancer.email}
                </a>
                <a href={`tel:${freelancer.phone}`} className="flex items-center text-white hover:text-green-400">
                  <Phone className="h-4 w-4 mr-1" />
                  {freelancer.phone}
                </a>
                <a href={`https://${freelancer.website}`} className="flex items-center text-white hover:text-green-400">
                  <Globe className="h-4 w-4 mr-1" />
                  {freelancer.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
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
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Overview
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`py-4 px-1 relative ${
                  activeTab === 'portfolio'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Portfolio
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetailPage;