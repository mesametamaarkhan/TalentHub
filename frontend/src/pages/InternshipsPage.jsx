import { useState } from 'react';
import { FiFilter, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const internships = [
  {
    id: 1,
    company: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    title: 'Frontend Developer Intern',
    duration: '6 months',
    location: 'New York, NY',
    stipend: '$2000/month',
    type: 'Full-time'
  },
  {
    id: 2,
    company: 'DesignLabs',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    title: 'UI/UX Design Intern',
    duration: '3 months',
    location: 'Remote',
    stipend: '$1500/month',
    type: 'Part-time'
  },
  {
    id: 3,
    company: 'DataTech',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    title: 'Data Science Intern',
    duration: '4 months',
    location: 'Boston, MA',
    stipend: '$2500/month',
    type: 'Full-time'
  }
];

const InternshipsPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    duration: '',
    location: '',
    stipend: ''
  });

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 bg-secondary rounded-lg p-6 h-fit">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <FiFilter className="mr-2" /> Filters
              </h3>
              
              {/* Internship Type */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm mb-2">Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full bg-primary text-white rounded-md px-3 py-2 border border-gray-700"
                >
                  <option value="">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>

              {/* Duration */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm mb-2">Duration</label>
                <select
                  value={filters.duration}
                  onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                  className="w-full bg-primary text-white rounded-md px-3 py-2 border border-gray-700"
                >
                  <option value="">Any Duration</option>
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm mb-2">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="w-full bg-primary text-white rounded-md px-3 py-2 border border-gray-700"
                >
                  <option value="">Any Location</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                </select>
              </div>

              {/* Stipend Range */}
              <div className="mb-4">
                <label className="block text-gray-300 text-sm mb-2">Stipend Range</label>
                <select
                  value={filters.stipend}
                  onChange={(e) => setFilters({ ...filters, stipend: e.target.value })}
                  className="w-full bg-primary text-white rounded-md px-3 py-2 border border-gray-700"
                >
                  <option value="">Any Range</option>
                  <option value="1000">$1000+</option>
                  <option value="2000">$2000+</option>
                </select>
              </div>
            </div>

            {/* Internships List */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-6">
                {internships.map((internship) => (
                  <div key={internship.id} className="bg-secondary rounded-lg p-6">
                    <div className="flex items-start">
                      <img
                        src={internship.logo}
                        alt={internship.company}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{internship.title}</h3>
                            <p className="text-accent">{internship.company}</p>
                          </div>
                          <button className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-md">
                            Apply Now
                          </button>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4 text-gray-300">
                          <span className="flex items-center">
                            <FiMapPin className="mr-1" /> {internship.location}
                          </span>
                          <span className="flex items-center">
                            <FiClock className="mr-1" /> {internship.duration}
                          </span>
                          <span className="flex items-center">
                            <FiDollarSign className="mr-1" /> {internship.stipend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;