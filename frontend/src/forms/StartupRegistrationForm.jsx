import React from 'react';
import { motion } from 'framer-motion';
import { Building, Rocket, X, Upload, User, FileText } from 'lucide-react';

const StartupRegistrationForm = ({ setShowStartupForm }) => {

  return (
    <div className="fixed inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={() => setShowStartupForm(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Register Your Startup</h3>
        <form className="space-y-6">
          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2 text-green-400" />
              Company Information
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                  <option value="">Select industry</option>
                  <option value="software">Software Development</option>
                  <option value="ai">AI/ML</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="iot">IoT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Stage</label>
                <select className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500">
                  <option value="">Select stage</option>
                  <option value="idea">Idea Stage</option>
                  <option value="mvp">MVP</option>
                  <option value="early">Early Traction</option>
                  <option value="growth">Growth Stage</option>
                </select>
              </div>
            </div>
          </div>

          {/* Founder Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-green-400" />
              Founder Information
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>

          {/* Pitch Deck */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-green-400" />
              Pitch Deck
            </h4>
            <div className="border-2 border-dashed border-green-700 rounded-lg p-8 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <p className="text-sm text-white mb-2">Upload your pitch deck</p>
              <p className="text-xs text-white">PDF or PPT format (max 10MB)</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Rocket className="h-5 w-5" />
            Submit Registration
          </button>
        </form>
      </motion.div>
    </div>
  );    
};

export default StartupRegistrationForm;