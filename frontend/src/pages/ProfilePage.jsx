import React, { useState } from 'react';
import { User, Briefcase, Link as LinkIcon, Settings, Users, Star, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg mb-6">
      <div
        className="flex justify-between items-center bg-black p-4 cursor-pointer rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-white h-6 w-6" />
        ) : (
          <ChevronDown className="text-white h-6 w-6" />
        )}
      </div>
      {isOpen && (
        <div className="p-6 bg-black transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data - in a real app, this would come from your backend
  const user = {
    type: 'company', // or 'company' or 'internee'
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
              <p className="text-white">{user.bio}</p>
            </div>

            {/* Skills Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
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
                {user.workHistory.map((work) => (
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
            {user.portfolio.map((project) => (
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

      case 'connections':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add connection cards here */}
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            {/* Profile Details Section */}
            <CollapsibleSection title="Profile Details">
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-white mb-1">Profession</label>
                  <input
                    type="text"
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    defaultValue={user.title}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Location</label>
                  <input
                    type="text"
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    defaultValue={user.location}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder='+1 (555) 123-4567'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    defaultValue={user.phone}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Email</label>
                  <input
                    type="email"
                    placeholder='youremail@example.com'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    defaultValue={user.email}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Website</label>
                  <input
                    type="url"
                    placeholder='www.your-website.com'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    defaultValue={user.website}
                  />
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 text-white">
                  Save Changes
                </button>
              </form>
            </CollapsibleSection>

            {/* Change Password Section */}
            <CollapsibleSection title="Change Password">
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-white mb-1">Current Password</label>
                  <input
                    type="password"
                    placeholder='Enter current password'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder='Enter new password'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder='Confirm new password'
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 text-white">
                  Change Password
                </button>
              </form>
            </CollapsibleSection>

            {/* Credit Card Details Section */}
            <CollapsibleSection title="Credit Card Details">
              <div className="space-y-4">
                {/* List Existing Credit Cards */}
                <div className="flex justify-between items-center bg-dark-greenish-gray rounded-lg p-4">
                  <span className="text-white">**** **** **** 1234</span>
                  <button className="text-red-500 hover:text-red-600">Remove</button>
                </div>

                {/* Add New Credit Card */}
                <form className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-white mb-1">Card Number</label>
                    <input
                      type="text"
                      className="bg-dark-greenish-gray text-white rounded-lg p-4"
                      placeholder="Enter card number"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex flex-col">
                      <label className="text-white mb-1">Expiry Date</label>
                      <input
                        type="text"
                        className="bg-dark-greenish-gray text-white rounded-lg p-4"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-white mb-1">CVC</label>
                      <input
                        type="text"
                        className="bg-dark-greenish-gray text-white rounded-lg p-4"
                        placeholder="CVC"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 text-white">
                    Add Card
                  </button>
                </form>
              </div>
            </CollapsibleSection>
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
              src={user.image}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
              <p className="text-white mb-4">{user.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {user.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {user.rating} ({user.completedProjects} projects)
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href={`mailto:${user.email}`} className="flex items-center text-white hover:text-green-400">
                  <Mail className="h-4 w-4 mr-1" />
                  {user.email}
                </a>
                <a href={`tel:${user.phone}`} className="flex items-center text-white hover:text-green-400">
                  <Phone className="h-4 w-4 mr-1" />
                  {user.phone}
                </a>
                <a href={`https://${user.website}`} className="flex items-center text-white hover:text-green-400">
                  <Globe className="h-4 w-4 mr-1" />
                  {user.website}
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
              
              <button
                onClick={() => setActiveTab('connections')}
                className={`py-4 px-1 relative ${
                  activeTab === 'connections'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Connections
                </div>
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 relative ${
                  activeTab === 'settings'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
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

export default ProfilePage;