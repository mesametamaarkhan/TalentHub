import React, { useState } from 'react';
import { Search, Grid, List, Star, MapPin, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FreelancersPage = () => {
  const [isGridView, setIsGridView] = useState(true);
  const navigate = useNavigate(); 

  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      skills: ['React', 'Node.js', 'TypeScript'],
      rating: 4.9,
      location: 'San Francisco, CA',
      experience: '5 years',
      bio: 'Full-stack developer specializing in React and Node.js applications.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      skills: ['UI/UX', 'Figma', 'Adobe XD'],
      rating: 4.8,
      location: 'New York, NY',
      experience: '4 years',
      bio: 'Creative UI/UX designer with a passion for user-centered design.'
    },
    // Add more freelancers as needed
  ];

  const handleNavigate = (id) => {
    navigate(`/profile/${id}`); 
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search freelancers..."
              className="w-full bg-black border border-black rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-black"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-lg ${isGridView ? 'bg-green-600' : 'bg-gray-800'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-lg ${!isGridView ? 'bg-green-600' : 'bg-gray-800'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Freelancers Grid/List */}
        <div className={`grid ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigate(freelancer.id)} // Navigate when card is clicked
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{freelancer.name}</h3>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{freelancer.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2">{freelancer.rating}</span>
                    <span className="mx-2">•</span>
                    <Briefcase className="h-4 w-4" />
                    <span className="ml-2">{freelancer.experience}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{freelancer.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-green-700 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleNavigate(freelancer.id); 
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancersPage;
