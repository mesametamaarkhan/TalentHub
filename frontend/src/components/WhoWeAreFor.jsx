import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const cards = [
  {
    title: 'Freelancers',
    description: 'Build your portfolio and connect with clients worldwide',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    link: '/freelancers'
  },
  {
    title: 'Companies',
    description: 'Find top talent for your projects and grow your business',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    link: '/companies'
  },
  {
    title: 'Students',
    description: 'Kickstart your career with internship opportunities',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    link: '/internships'
  }
];

const WhoWeAreFor = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Who We Are For
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-flex items-center text-accent hover:text-accent-light"
                >
                  Learn More <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreFor;