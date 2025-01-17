import React from 'react';
import { Users, Briefcase, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { icon: Users, title: '10K+', description: 'Active Freelancers' },
    { icon: Briefcase, title: '5K+', description: 'Companies Hiring' },
    { icon: Trophy, title: '15K+', description: 'Success Stories' },
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/banner.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Top Talent & <br />
            <span className="text-green-500">Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl text-white-300 mb-12 max-w-3xl mx-auto">
            Whether you're a freelancer, company, or student, find your perfect match in our growing professional community.
          </p>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="backdrop-blur-md bg-black rounded-xl p-6 border border-gray-700"
                >
                <stat.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2 text-white">{stat.title}</h3>
                <p className="text-white-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
