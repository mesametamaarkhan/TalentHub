import React, { useState, useEffect } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import GigForm from '../components/GigsForm'; // Importing the GigForm
import robin from '../assets/robin.jpg';

const GigsPage = () => {
  const navigate = useNavigate();
  const [gigs, setGigs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error("No access token found!");
          return;
        }
  
        const response = await axios.get('http://localhost:8080/gigs', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setGigs(response.data.gigs);
          setFilteredGigs(response.data.gigs);
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

  const handleAddGig = (newGig) => {
    setGigs([...gigs, newGig]);
    setFilteredGigs([...gigs, newGig]);
    setModalIsOpen(false);
    window.location.reload();
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

        {/* Search Bar and Add Button */}
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
            onClick={() => setModalIsOpen(true)}
            className="p-2 rounded-lg bg-black hover:bg-green-600 transition-colors"
          >
            <Plus className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Gig Cards */}
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
                  <span>${gig.budget}</span>
                  <p className="text-gray-400 text-sm mb-4">{gig.description}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(gig._id);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Gig
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Gig Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-dark-greenish-gray/50"
        >
          <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setModalIsOpen(false)}  // Close the modal when clicked
              className="absolute top-2 right-2 text-white bg-transparent border-0 p-2"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Gig</h2>
            <GigForm onGigAdded={handleAddGig} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default GigsPage;
