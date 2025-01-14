import { useState } from 'react';
import { FiSearch, FiStar } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const freelancers = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    skills: ['React', 'Node.js', 'TypeScript'],
    rating: 4.8,
    bio: 'Full stack developer with 5 years of experience in web applications.',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    skills: ['UI/UX', 'Figma', 'Adobe XD'],
    rating: 4.9,
    bio: 'Senior UI/UX designer specializing in user-centered design solutions.',
    location: 'London, UK'
  },
  {
    id: 3,
    name: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    skills: ['Python', 'Data Science', 'Machine Learning'],
    rating: 4.7,
    bio: 'Data scientist with expertise in ML and AI implementations.',
    location: 'Toronto, Canada'
  }
];

const FreelancersPage = () => {
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
              placeholder="Search by skills, experience, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-primary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Freelancers Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelancers.map((freelancer) => (
              <div key={freelancer.id} className="bg-secondary rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={freelancer.image}
                      alt={freelancer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">{freelancer.name}</h3>
                      <div className="flex items-center">
                        <FiStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-300">{freelancer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {freelancer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary rounded-full text-sm text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm">{freelancer.bio}</p>
                    <p className="text-gray-400 text-sm mt-2">{freelancer.location}</p>
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

export default FreelancersPage;