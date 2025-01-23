import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FreelanceProgram = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`${link}`);
  }
  
  const features = [
    'Access to global opportunities',
    'Secure payment protection',
    'Professional growth resources',
    'Networking events',
    'Skills verification',
    'Premium project matching'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            >
            <h2 className="text-3xl font-bold mb-6">
              Join Our Elite <span className="text-green-500">Freelance Program</span>
            </h2>
            <p className="text-green-400 mb-8">
              Take your freelancing career to the next level with our comprehensive program designed to help you succeed in the global marketplace.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center"
                  >
                  <CheckCircle className="text-green-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium"
              onClick={() => handleNavigate('/signup')}
              >
              Join Now
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
            >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
              alt="Freelancer working"
              className="rounded-xl shadow-2xl"
              loading='lazy'
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 rounded-lg p-4 shadow-xl">
              <p className="text-2xl font-bold">90%</p>
              <p className="text-sm">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceProgram;