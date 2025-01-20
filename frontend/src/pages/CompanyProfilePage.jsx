import React, { useState } from 'react';
import { User, Briefcase, Link as LinkIcon, Settings, Users, Star, MapPin, Mail, Phone, Globe, PlusCircle } from 'lucide-react';
import CollapsibleSection from '../components/CollapsibleSection';

const CompanyProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [postings, setPostings] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', description: '', type: 'job', requiredSkills: '' });

  // Mock user data - in a real app, this would come from your backend
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

  const handleNewPostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    setPostings([...postings, { ...newPost, id: postings.length + 1 }]);
    setNewPost({ title: '', description: '', type: 'job' });
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
    
        case 'postings':
            return (
            <div className="space-y-8">
                <form className="bg-black rounded-lg p-6 space-y-4" onSubmit={handleAddPost}>
                <h3 className="text-xl font-semibold mb-4">Add New Posting</h3>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Title</label>
                    <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleNewPostChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Description</label>
                    <textarea
                    name="description"
                    value={newPost.description}
                    onChange={handleNewPostChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Required Skills</label>
                    <textarea
                    name="skills"
                    value={newPost.requiredSkills}
                    onChange={handleNewPostChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white mb-1">Type</label>
                    <select
                    name="type"
                    value={newPost.type}
                    onChange={handleNewPostChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                    >
                    <option value="job">Job</option>
                    <option value="internship">Internship</option>
                    </select>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 text-white">
                    Add Posting
                </button>
                </form>

                <div className="bg-black rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Current Postings</h3>
                {postings.length > 0 ? (
                    postings.map((post) => (
                    <div key={post.id} className="border-l-2 border-green-600 pl-4">
                        <h4 className="font-semibold text-white">{post.title}</h4>
                        <p className="text-green-400">{post.type}</p>
                        <p className="mt-2 text-white">{post.description}</p>
                    </div>
                    ))
                ) : (
                    <p className="text-white">No postings available.</p>
                )}
                </div>
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
                            <label className="text-white mb-1">Location</label>
                            <input
                                type="text"
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.location}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-1">Phone</label>
                            <input
                                type="tel"
                                placeholder='+1 (555) 123-4567'
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.phone}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-1">Email</label>
                            <input
                                type="email"
                                placeholder='youremail@example.com'
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.email}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-1">Website</label>
                            <input
                                type="url"
                                placeholder='www.your-website.com'
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.website}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-1">Employees</label>
                            <input
                                type="text"
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.stats.employees}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-white mb-1">Projects</label>
                            <input
                                type="text"
                                className="bg-dark-greenish-gray text-white rounded-lg p-2"
                                defaultValue={company.stats.projects}
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
                <CollapsibleSection title="Bank Details">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-dark-greenish-gray rounded-lg p-4">
                            <span className="text-white">**** **** **** 1234</span>
                            <button className="text-red-500 hover:text-red-600">Remove</button>
                        </div>

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
              src={company.image}
              alt={company.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
              <p className="text-white mb-4">{company.title}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {company.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {company.rating} ({company.completedProjects} projects)
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
                onClick={() => setActiveTab('postings')}
                className={`py-4 px-1 relative ${
                  activeTab === 'postings'
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Postings
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

export default CompanyProfilePage;