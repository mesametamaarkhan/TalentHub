import React, { useState, useEffect } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import InternshipForm from '../components/InternshipForm';
import robin from '../assets/robin.jpg';

const InternshipsPage = () => {
  const navigate = useNavigate();
  const [internships, setInternships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const token = localStorage.getItem('accessToken');
  
        if (!token) {
          console.error("No access token found!");
          return;
        }
  
        const response = await axios.get('http://localhost:8080/internships', {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

        if (response.status === 200) {
          setInternships(response.data.internships);
          setFilteredInternships(response.data.internships);
        } else if (response.status === 403) {
          navigate('/login');
        } else if (response.status === 404) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching internships:', error);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredInternships(
      internships.filter(
        (internship) =>
          internship.title.toLowerCase().includes(lowerCaseQuery) ||
          internship.description.toLowerCase().includes(lowerCaseQuery) ||
          internship.location.toLowerCase().includes(lowerCaseQuery) ||
          internship.skillsRequired.some((skill) =>
            skill.toLowerCase().includes(lowerCaseQuery)
          )
      )
    );
  }, [searchQuery, internships]);

  const handleNavigate = (id) => {
    navigate(`/internship/${id}`);
  };

  const handleAddInternship = (newInternship) => {
    setInternships([ ...internships, newInternship ]);
    setFilteredInternships([ ...internships, newInternship]);
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
          <h1 className="text-3xl font-bold mt-4">Internships</h1>
          <p className="mt-2 text-white">Discover the best internship opportunities</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search internships..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black border border-white rounded-lg py-2 px-4 pl-10 focus:ring-white focus:ring-2"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className={`p-2 rounded-lg bg-black hover:bg-green-600 transition-colors`}
          >
            <Plus className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <div
              key={internship._id}
              className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavigate(internship._id)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={robin}
                    alt="internship"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{internship.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-4">{internship.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skillsRequired.slice(0, 4).map((skill, index) => (
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
                    handleNavigate(internship._id);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  View Internship
                </button>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='fixed inset-0 flex items-center justify-center bg-dark-greenish-gray/50'
        >
          <div className='bg-black p-6 rounded-lg shadow-lg w-full max-w-lg relative'>
            <button 
              onClick={() => setModalIsOpen(false)}
              className='absolute top-2 right-2 text-white bg-transparent border-0 p-2'
            >
              <X size={24} />
            </button>
            <h2 className='text-xl font-semibold mb-4'>Add New Internship</h2>
            <InternshipForm onInternshipAdded={handleAddInternship} />
          </div>

        </Modal>
      </div>
    </div>
  );
};

export default InternshipsPage;