import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TopCompanies = () => {
  const companies = [
    {
      name: 'TechCorp',
      industry: 'Software Development',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      name: 'DesignHub',
      industry: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    },
    {
      name: 'DataTech',
      industry: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-dark-greenish-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
          >
          <h2 className="text-3xl text-white font-bold mb-4">Top IT Companies</h2>
          <p className="text-white">Partner with industry leaders</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-gray-400 mb-4">{company.industry}</p>
                <a href="#" className="text-green-400 hover:text-green-300 inline-flex items-center">
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
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
            View All Companies <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;