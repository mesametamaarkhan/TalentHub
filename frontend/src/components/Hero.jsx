import { motion } from 'framer-motion';

const statsData = [
  { number: '10K+', label: 'Active Freelancers' },
  { number: '5K+', label: 'Companies' },
  { number: '20K+', label: 'Success Stories' },
];

const Hero = () => {
  return (
    <div className="min-h-screen bg-primary pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connect with Top Talent & <br />
            <span className="text-accent">Opportunities</span>
          </h1>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
            Your gateway to connecting talented freelancers with innovative companies.
            Find your next opportunity or perfect talent match today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-md text-lg">
              Find Talent
            </button>
            <button className="border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-md text-lg">
              Find Work
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-glass backdrop-blur-md rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;