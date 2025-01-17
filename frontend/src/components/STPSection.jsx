import React from 'react';
import { ArrowRight } from 'lucide-react';

const STPSection = () => {
  const programs = [
    {
      title: 'Software Development',
      description: 'Learn from industry experts and build real-world projects',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80'
    },
    {
      title: 'UI/UX Design',
      description: 'Master the art of creating beautiful and functional interfaces',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80'
    },
    {
      title: 'Data Science',
      description: 'Dive into the world of data analytics and machine learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-dark-greenish-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-bold mb-4">Student Training Program</h2>
          <p className="text-white">Launch your career with our intensive training programs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-black rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-white mb-4">{program.description}</p>
                <a href="#" className="text-green-500 hover:text-green-300 inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-flex items-center">
            View All Programs <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default STPSection;