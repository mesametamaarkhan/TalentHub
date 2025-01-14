import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const freelancers = [
  {
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    description: '5+ years experience in web development'
  },
  {
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    description: 'Specialist in user-centered design'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    description: 'Expert in machine learning and AI'
  }
];

const TopFreelancers = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Top Rated Freelancers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our highest-rated professionals who consistently deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary rounded-lg overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{freelancer.name}</h3>
                <p className="text-accent mb-2">{freelancer.role}</p>
                <div className="flex items-center justify-center mb-3">
                  <FiStar className="text-yellow-400" />
                  <span className="text-white ml-1">{freelancer.rating}</span>
                </div>
                <p className="text-gray-300 mb-4">{freelancer.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent hover:text-accent-light"
                >
                  View Profile <FiArrowRight className="ml-2" />
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
            View All Freelancers
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TopFreelancers;