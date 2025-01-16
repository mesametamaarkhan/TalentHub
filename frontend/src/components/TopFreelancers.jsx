import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TopFreelancers = React.memo(() => {
  const freelancers = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
          >
          <h2 className="text-3xl font-bold mb-4">Top Rated Freelancers</h2>
          <p className="text-gray-300">Work with the best talent in the industry</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {freelancers.map((freelancer, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform duration-300"
              >
              <div className="p-6 text-center">
                <img 
                  src={freelancer.image} 
                  alt={freelancer.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{freelancer.name}</h3>
                <p className="text-gray-400 mb-3">{freelancer.role}</p>
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2">{freelancer.rating}</span>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
            View All Freelancers <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
});

export default TopFreelancers;