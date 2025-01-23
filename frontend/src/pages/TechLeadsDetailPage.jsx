import React, { useState } from 'react'

const TechLeadsDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const techLead = {
        id: 1,
        company: 'EcoTech Solutions',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        title: 'Technical Campus Lead',
        location: 'San Francisco, CA',
        type: 'Hybrid',
        duration: '12 months',
        stipend: '$5000/month',
        description: 'Lead technical workshops, represent our brand, and mentor student developers.',
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
                {/* techLead Description */}
                <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-white">{techLead.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
                <ul className="list-disc pl-5 text-white">
                    {techLead.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>

                {/* Requirements */}
                <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 text-white">
                    {techLead.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
            </div>
            );

        case 'apply':
            return (
            <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
                <p className="text-white">Please submit your application via the link below:</p>
                <a
                href={techLead.applicationLink}
                className="text-green-400 hover:text-blue-300"
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
        <div className="min-h-screen bg-dark-greenish-gray pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* techLead Header */}
            <div className="bg-black rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold mb-4">{techLead.title}</h1>
            <p className="text-white mb-4">{techLead.companyName}</p>
            <div className="flex gap-8 text-white mb-4">
                <div>{techLead.location}</div>
                <div>{techLead.duration}</div>
                <div>{techLead.stipend}</div>
            </div>
            </div>

            {/* techLead Tabs */}
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
                    onClick={() => setActiveTab('apply')}
                    className={`py-4 px-1 relative ${
                    activeTab === 'apply'
                        ? 'text-green-400 border-b-2 border-green-400'
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
}

export default TechLeadsDetailPage