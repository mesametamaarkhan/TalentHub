import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WhoWeAreFor = React.memo(() => {
  const cards = [
    {
      title: 'Freelancers',
      description: 'Build your portfolio and connect with global opportunities',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80',
      link: '/freelancers'
    },
    {
      title: 'Companies',
      description: 'Find top talent for your projects and grow your team',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      link: '/companies'
    },
    {
      title: 'Students',
      description: 'Kickstart your career with internship opportunities',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      link: '/students'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Who We're For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60"></div>
              </div>
              <div className="relative p-8 h-96 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <a 
                  href={card.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhoWeAreFor;