import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const programs = [
  {
    title: 'Software Development',
    description: 'Learn from industry experts and build real-world projects',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    title: 'UI/UX Design',
    description: 'Master the art of creating beautiful and functional interfaces',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5'
  },
  {
    title: 'Data Science',
    description: 'Explore the world of data analytics and machine learning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  }
];

const STPSection = () => {
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
            Student Training Program
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Launch your career with our comprehensive training programs designed
            for students and fresh graduates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent hover:text-accent-light"
                >
                  Learn More <FiArrowRight className="ml-2" />
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
            View All Programs
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default STPSection;