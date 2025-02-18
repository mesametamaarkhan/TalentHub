import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TopInternships = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`${link}`);
  }

  const internships = [
    {
      title: 'Software Engineering Intern',
      company: 'TechCorp',
      industry: 'Software Development',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'DesignHub',
      industry: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    },
    {
      title: 'Data Analyst Intern',
      company: 'DataTech',
      industry: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
          >
          <h2 className="text-3xl text-white font-bold mb-4">Top IT Internships</h2>
          <p className="text-green-400">Kickstart your career</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {internships.map((internship, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-dark-greenish-gray rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform duration-300"
              loading='lazy'
              >
              <div className="relative h-48">
                <img 
                  src={internship.image} 
                  alt={internship.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
                <p className="text-white mb-2">{internship.company}</p>
                <p className="text-white mb-4">{internship.industry}</p>
                <a href={`/internships/${index + 1}`} className="text-green-400 hover:text-green-300 inline-flex items-center">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
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
            onClick={() => handleNavigate('/internships')}
            >
              View All Internships <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TopInternships;
