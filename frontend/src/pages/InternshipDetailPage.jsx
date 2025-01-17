import { useState } from "react";

const InternshipDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    // Mock internship data
    const internship = {
      title: 'Software Development Intern',
      companyName: 'TechCorp',
      location: 'San Francisco, CA',
      duration: '3 months',
      stipend: '$3000/month',
      description: 'Join our development team to build next-gen web applications.',
      responsibilities: [
        'Assist in coding and testing features',
        'Collaborate with senior developers on projects',
        'Write technical documentation'
      ],
      requirements: [
        'Basic knowledge of JavaScript',
        'Familiarity with React or Node.js',
        'Interest in software development'
      ],
      applicationLink: '#'
    };
  
    const renderTabContent = () => {
      switch (activeTab) {
        case 'overview':
          return (
            <div className="space-y-8">
              {/* Internship Description */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-400">{internship.description}</p>
              </div>
  
              {/* Responsibilities */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
                <ul className="list-disc pl-5 text-gray-400">
                  {internship.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
  
              {/* Requirements */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 text-gray-400">
                  {internship.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
  
        case 'apply':
          return (
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
              <p className="text-gray-400">Please submit your application via the link below:</p>
              <a
                href={internship.applicationLink}
                className="text-blue-400 hover:text-blue-300"
              >
                Apply Now
              </a>
            </div>
          );
  
        default:
          return null;
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Internship Header */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold mb-4">{internship.title}</h1>
            <p className="text-gray-400 mb-4">{internship.companyName}</p>
            <div className="flex gap-8 text-gray-400 mb-4">
              <div>{internship.location}</div>
              <div>{internship.duration}</div>
              <div>{internship.stipend}</div>
            </div>
          </div>
  
          {/* Internship Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-700">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 relative ${
                    activeTab === 'overview'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('apply')}
                  className={`py-4 px-1 relative ${
                    activeTab === 'apply'
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Apply
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
  
  export default InternshipDetailPage;
  