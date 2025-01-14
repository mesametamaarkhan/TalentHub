import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const stories = [
  {
    title: 'From Startup to Success',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    description: 'How we helped a startup scale their development team'
  },
  {
    title: 'Global Talent Solution',
    company: 'GlobalTech',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    description: 'Building a diverse remote team across continents'
  },
  {
    title: 'Career Transformation',
    company: 'Innovation Labs',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    description: `A junior developer's journey to tech lead`
  }
];

const SuccessStories = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real stories from companies and freelancers who found success through our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                <p className="text-accent mb-2">{story.company}</p>
                <p className="text-gray-300 mb-4">{story.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-accent hover:text-accent-light"
                >
                  Read Full Story <FiArrowRight className="ml-2" />
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
            View All Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
