import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import robin from '../assets/robin.jpg';

const GigsPage = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [gigs, setGigs] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredGigs, setFilteredGigs] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const token = localStorage.getItem('accessToken');
  
        if (!token) {
          console.error("No access token found!");
          return;
        }
  
        const response = await axios.get('http://localhost:8080/gigs', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        if (response.status === 200) {
          setGigs(response.data.gigs);
          setFilteredGigs(response.data.gigs); // Initialize filtered list
        } else if (response.status === 403) {
          navigate('/login');
        } else if (response.status === 404) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching gigs:', error);
      }
    };

    fetchGigs();
  }, []);

  // Filter gigs when searchQuery changes
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredGigs(
      gigs.filter(
        (gig) =>
          gig.title.toLowerCase().includes(lowerCaseQuery) ||
          gig.description.toLowerCase().includes(lowerCaseQuery) ||
          gig.category.toLowerCase().includes(lowerCaseQuery) ||
          gig.duration.toLowerCase().includes(lowerCaseQuery) ||
          gig.skillsRequired.some((skill) =>
            skill.toLowerCase().includes(lowerCaseQuery)
          )
      )
    );
  }, [searchQuery, gigs]);  

  const handleNavigate = (id) => {
    navigate(`/gig/${id}`);
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mt-4">Gigs</h1>
          <p className="mt-2 text-white">Find the perfect gig for your needs</p>
        </motion.div>

        {/* Search Bar and Filter Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search gigs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black border border-white rounded-lg py-2 px-4 pl-10 focus:ring-white focus:ring-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg ${showFilters ? 'bg-green-600' : 'bg-black'} transition-colors`}
          >
            <Filter className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map((gig) => (
            <div
              key={gig._id}
              className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigate(gig._id)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={robin}
                    alt="gig"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{gig.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span>${gig.budget}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{gig.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {gig.skillsRequired.slice(0, 4).map((skill, index) => (
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
                    handleNavigate(gig._id);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  View Gig
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GigsPage;