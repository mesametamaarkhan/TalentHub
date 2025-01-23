import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Users, Lightbulb, Calendar, FlaskRound as Flask, MapPin, ArrowRight, Building, TreePine, Rocket, Handshake } from 'lucide-react';
import StartupRegistrationForm from '../forms/StartupRegistrationForm';
import PartnershipForm from '../forms/PartnershipForm';
import { useNavigate } from 'react-router-dom';

const STPPage = () => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [showStartupForm, setShowStartupForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`${link}`);
  }

  const featuredParks = [
    {
      id: 1,
      name: 'Tech Valley Hub',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      location: 'Silicon Valley, CA',
      features: ['5G Internet', 'Innovation Lab', 'Startup Incubator'],
      description: 'A cutting-edge technology park fostering innovation and growth.',
    },
    {
      id: 2,
      name: 'Digital Innovation Zone',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      location: 'Austin, TX',
      features: ['AI Research Center', 'Blockchain Lab', 'Coworking Spaces'],
      description: 'Where digital transformation meets sustainable innovation.',
    },
    {
      id: 3,
      name: 'Green Tech Campus',
      image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80',
      location: 'Portland, OR',
      features: ['Renewable Energy Lab', 'Sustainable Tech Hub', 'Green Initiatives'],
      description: 'Leading the way in sustainable technology development.',
    },
  ];

  const facilities = [
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: '5G connectivity and dedicated fiber lines',
    },
    {
      icon: Users,
      title: 'Co-working Spaces',
      description: 'Modern workspaces for teams of all sizes',
    },
    {
      icon: Rocket,
      title: 'Incubation Centers',
      description: 'Launch and grow your startup',
    },
    {
      icon: Lightbulb,
      title: 'Business Mentorship',
      description: 'Expert guidance for growth',
    },
    {
      icon: Calendar,
      title: 'Networking Events',
      description: 'Regular meetups and conferences',
    },
    {
      icon: Flask,
      title: 'Specialized Labs',
      description: 'AI, IoT, and Blockchain facilities',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-greenish-gray">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TreePine className="h-16 w-16 mx-auto mb-6 text-green-400 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Software Technology Parks
            </h1>
            <p className="text-xl text-green-400 mb-8">
              Empowering the tech ecosystem for growth and innovation
            </p>
            <button className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
              Explore Parks Near You
              <MapPin className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Featured Parks Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Building className="h-12 w-12 mx-auto mb-4 text-green-400" />
          <h2 className="text-3xl font-bold mb-4">Featured Technology Parks</h2>
          <p className="text-green-400">
            Discover world-class facilities and innovation hubs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredParks.map((park, index) => (
            <motion.div
              key={park.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect bg-black rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{park.name}</h3>
                <div className="flex items-center text-white mb-4">
                  <MapPin className="text-green-400 h-4 w-4 mr-2" />
                  {park.location}
                </div>
                <div className="space-y-2 mb-4">
                  {park.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-white mb-4">{park.description}</p>
                <button 
                    onClick={() => handleNavigate(`/stp/${park.id}`)}
                    className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-green-400">
              Comprehensive facilities to support your tech journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl p-6 hover:border-green-500 transition-all duration-300"
              >
                <facility.icon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-green-400">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <MapPin className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Find a Park Near You</h2>
            <p className="text-green-400">
              Explore our network of technology parks across the country
            </p>
          </motion.div>

          <div className="glass-effect bg-black rounded-xl p-6 aspect-video relative">
            {/* Placeholder for map integration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-green-400">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Handshake className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">
              Be Part of a Growing Tech Ecosystem
            </h2>
            <p className="text-green-400 mb-8">
              Join our community of innovators and tech enthusiasts
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowStartupForm(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Register Your Startup
              </button>

              <button
                onClick={() => setShowPartnerForm(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Render forms when their respective states are true */}
        {showStartupForm && <StartupRegistrationForm setShowStartupForm={setShowStartupForm} />}
        {showPartnerForm && <PartnershipForm setShowPartnerForm={setShowPartnerForm} />}
      </div>
    </div>
  );
};

export default STPPage;