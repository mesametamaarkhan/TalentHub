import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const STPSection = () => {
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

  return (
    <section className="py-20 bg-dark-greenish-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-bold mb-4">Software Technology Parks</h2>
          <p className="text-green-400">Launch your career with our intensive training programs</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

        <div className="text-center">
          <button
            onClick={() => handleNavigate('/stp')}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
          >
          View All Parks <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default STPSection;