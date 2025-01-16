import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessStories = React.memo(() => {
  const stories = [
    {
      name: 'David Wilson',
      role: 'Frontend Developer',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      quote: 'Found my dream job through this platform. The process was smooth and professional.'
    },
    {
      name: 'Lisa Chang',
      role: 'UX Designer',
      company: 'DesignHub',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      quote: 'The opportunities here helped me grow my freelance career beyond expectations.'
    },
    {
      name: 'James Martinez',
      role: 'Data Engineer',
      company: 'DataTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      quote: 'The STP program gave me the perfect start to my tech career.'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-300">Real stories from our community members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 relative"
              >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-400 opacity-50" />
              <div className="flex items-center mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{story.name}</h3>
                  <p className="text-sm text-gray-400">{story.role}</p>
                  <p className="text-sm text-blue-400">{story.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">"{story.quote}"</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-flex items-center">
            View All Stories <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
});

export default SuccessStories;