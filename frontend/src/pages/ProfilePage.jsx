import { useState } from 'react';
import { FiEdit2, FiMapPin, FiBriefcase, FiMail, FiStar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import ProfileTabs from '../components/ProfileTabs';

// Mock data for different user types
const mockUsers = {
  freelancer: {
    id: 1,
    type: 'Freelancer',
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Full stack developer with 5+ years of experience',
    location: 'San Francisco, CA',
    email: 'john@example.com',
    rating: 4.8,
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    workHistory: [
      {
        company: 'TechCorp',
        role: 'Senior Developer',
        duration: '2020 - Present',
        description: 'Led development of enterprise applications'
      }
    ],
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce solution',
        link: '#'
      }
    ],
    connections: [
      {
        name: 'TechCorp',
        type: 'Client',
        image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623'
      }
    ]
  },
  company: {
    id: 2,
    type: 'Company',
    name: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    description: 'Leading provider of enterprise software solutions',
    location: 'San Francisco, CA',
    email: 'contact@techcorp.com',
    industry: 'Software Development',
    postings: [
      {
        title: 'Senior Frontend Developer',
        type: 'Full-time',
        location: 'San Francisco, CA'
      }
    ],
    connections: [
      {
        name: 'John Doe',
        type: 'Freelancer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    ]
  },
  internee: {
    id: 3,
    type: 'Internee',
    name: 'Sarah Wilson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Computer Science student passionate about web development',
    location: 'Boston, MA',
    email: 'sarah@example.com',
    education: {
      university: 'MIT',
      degree: 'BS Computer Science',
      year: '3rd Year'
    },
    skills: ['JavaScript', 'React', 'Python'],
    applications: [
      {
        company: 'TechCorp',
        position: 'Frontend Developer Intern',
        status: 'Applied',
        date: '2024-01-15'
      }
    ]
  }
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  // For demo, we'll use the freelancer profile. In a real app, this would be determined by the route/user type
  const user = mockUsers.freelancer;
  
  const getTabs = (userType) => {
    const commonTabs = ['Overview', 'Settings'];
    switch (userType) {
      case 'Freelancer':
        return [...commonTabs.slice(0, -1), 'Portfolio', 'Connections', commonTabs[1]];
      case 'Company':
        return [...commonTabs.slice(0, -1), 'Postings', 'Connections', commonTabs[1]];
      case 'Internee':
        return [...commonTabs.slice(0, -1), 'Applications', commonTabs[1]];
      default:
        return commonTabs;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            {user.type === 'Freelancer' && (
              <>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary rounded-full text-accent">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Work History</h3>
                  {user.workHistory.map((work, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-white font-medium">{work.role}</h4>
                      <p className="text-accent">{work.company}</p>
                      <p className="text-gray-300 text-sm">{work.duration}</p>
                      <p className="text-gray-300 mt-2">{work.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {user.type === 'Company' && (
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Company Information</h3>
                <p className="text-gray-300">{user.description}</p>
                <div className="mt-4">
                  <p className="text-gray-300">
                    <FiBriefcase className="inline mr-2" />
                    {user.industry}
                  </p>
                </div>
              </div>
            )}
            {user.type === 'Internee' && (
              <>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
                  <p className="text-white">{user.education.university}</p>
                  <p className="text-gray-300">{user.education.degree}</p>
                  <p className="text-gray-300">{user.education.year}</p>
                </div>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary rounded-full text-accent">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      case 'Portfolio':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.portfolio.map((project, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-accent hover:text-accent-light">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        );
      case 'Connections':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {user.connections.map((connection, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6 flex items-center">
                <img
                  src={connection.image}
                  alt={connection.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-white font-medium">{connection.name}</h3>
                  <p className="text-gray-300 text-sm">{connection.type}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Postings':
        return (
          <div className="space-y-6">
            {user.postings.map((posting, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{posting.title}</h3>
                <p className="text-accent mb-2">{posting.type}</p>
                <p className="text-gray-300">
                  <FiMapPin className="inline mr-2" />
                  {posting.location}
                </p>
              </div>
            ))}
          </div>
        );
      case 'Applications':
        return (
          <div className="space-y-6">
            {user.applications.map((application, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{application.position}</h3>
                <p className="text-accent mb-2">{application.company}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-300">Applied: {application.date}</span>
                  <span className="px-3 py-1 bg-primary rounded-full text-accent">
                    {application.status}
                  </span>
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
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-secondary rounded-lg p-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="ml-6">
                  <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                  <p className="text-accent">{user.type}</p>
                  <div className="flex items-center mt-2 text-gray-300">
                    <FiMapPin className="mr-2" />
                    {user.location}
                  </div>
                  {user.type === 'Freelancer' && (
                    <div className="flex items-center mt-2">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="text-white">{user.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md flex items-center">
                <FiEdit2 className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Navigation */}
          <ProfileTabs
            tabs={getTabs(user.type)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Tab Content */}
          <div className="mt-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;