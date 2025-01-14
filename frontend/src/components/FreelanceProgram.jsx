import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const features = [
  'Access to high-paying projects',
  'Professional profile building',
  'Skill verification badges',
  'Direct client communication',
  'Secure payment system',
  'Career growth opportunities'
];

const FreelanceProgram = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our <span className="text-accent">Freelance Program</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Take control of your career with our comprehensive freelance program.
              Connect with top companies, showcase your skills, and earn what you deserve.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <FiCheck className="text-accent mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md"
            >
              Get Started
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Freelance Program"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceProgram;