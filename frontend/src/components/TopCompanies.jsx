import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const companies = [
  {
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    description: 'Leading technology solutions provider'
  },
  {
    name: 'InnovateLabs',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    description: 'Innovation-driven software company'
  },
  {
    name: 'DigitalFirst',
    logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    description: 'Digital transformation experts'
  }
];

const TopCompanies = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Top IT Companies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partner with industry-leading companies and take your career to new heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
                <p className="text-gray-300 mb-4">{company.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent hover:text-accent-light"
                >
                  View Opportunities <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md"
          >
            View All Companies
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;