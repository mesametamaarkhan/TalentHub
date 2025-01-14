import { useState } from 'react';

const ProfileTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-700">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab
                ? 'border-accent text-accent'
                : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;