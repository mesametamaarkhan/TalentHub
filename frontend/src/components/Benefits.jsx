import { motion } from 'framer-motion';
import { FiBriefcase, FiDollarSign, FiUsers, FiAward, FiShield, FiTrendingUp } from 'react-icons/fi';

const benefitsData = {
  companies: [
    { icon: FiUsers, title: 'Access Top Talent', description: 'Connect with verified professionals' },
    { icon: FiDollarSign, title: 'Cost Effective', description: 'Flexible hiring options' },
    { icon: FiShield, title: 'Quality Assured', description: 'Pre-vetted freelancers' }
  ],
  freelancers: [
    { icon: FiBriefcase, title: 'Quality Projects', description: 'Work with leading companies' },
    { icon: FiTrendingUp, title: 'Career Growth', description: 'Continuous learning opportunities' },
    { icon: FiAward, title: 'Recognition', description: 'Build your professional brand' }
  ]
};

const Benefits = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Membership Benefits
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the advantages of joining our platform, whether you're a company
            looking to hire or a freelancer seeking opportunities.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Companies Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">For Companies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsData.companies.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-secondary rounded-lg p-6"
                >
                  <benefit.icon className="text-accent text-3xl mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Freelancers Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">For Freelancers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitsData.freelancers.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-secondary rounded-lg p-6"
                >
                  <benefit.icon className="text-accent text-3xl mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;