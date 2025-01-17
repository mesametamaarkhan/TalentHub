import React from 'react';
import { Shield, Globe, Award, Users, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = {
    companies: [
      { icon: Users, title: 'Access Top Talent', description: 'Connect with verified professionals' },
      { icon: Shield, title: 'Quality Guarantee', description: 'Risk-free hiring process' },
      { icon: Clock, title: 'Fast Matching', description: 'Find the right talent quickly' }
    ],
    freelancers: [
      { icon: Globe, title: 'Global Opportunities', description: 'Work with clients worldwide' },
      { icon: Award, title: 'Skill Recognition', description: 'Get certified and verified' },
      { icon: Zap, title: 'Instant Payments', description: 'Secure and fast transactions' }
    ]
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          >
          <h2 className="text-3xl font-bold text-center mb-16">Membership Benefits</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the advantages of joining our platform, whether you're a company
            looking to hire or a freelancer seeking opportunities.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Companies Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Companies</h3>
            <div className="space-y-8">
              {benefits.companies.map((benefit, index) => (
                <motion.div
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                  >
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Freelancers Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Freelancers</h3>
            <div className="space-y-8">
              {benefits.freelancers.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
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