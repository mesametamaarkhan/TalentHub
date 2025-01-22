import React from 'react';
import { motion } from 'framer-motion';
import { Building, Handshake, X, User } from 'lucide-react';

const PartnershipForm = ({ setShowPartnerForm }) => {

    return (
        <div className="fixed inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
        >
            <button
            onClick={() => setShowPartnerForm(false)}
            className="absolute right-4 top-4 text-white hover:text-white"
            >
            <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>
            <form className="space-y-6">
            {/* Organization Information */}
            <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2 text-green-400" />
                    Organization Information
                </h4>
                <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Organization Name</label>
                    <input
                        type="text"
                        className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter organization name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Organization Type</label>
                    <select className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                        <option value="">Select type</option>
                        <option value="corporate">Corporate</option>
                        <option value="academic">Academic Institution</option>
                        <option value="government">Government Body</option>
                        <option value="ngo">NGO</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <input
                        type="url"
                        className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter website URL"
                    />
                </div>
                </div>
            </div>

            {/* Contact Information */}
            <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-green-400" />
                    Contact Information
                </h4>
                <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium mb-2">Contact Person</label>
                    <input
                        type="text"
                        className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter name"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium mb-2">Designation</label>
                    <input
                        type="text"
                        className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter designation"
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

            {/* Partnership Details */}
            <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Handshake className="h-5 w-5 mr-2 text-green-400" />
                    Partnership Details
                </h4>
                <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Partnership Type</label>
                    <select className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                        <option value="">Select type</option>
                        <option value="technology">Technology Partner</option>
                        <option value="research">Research Collaboration</option>
                        <option value="infrastructure">Infrastructure Partner</option>
                        <option value="education">Educational Partner</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Partnership Objectives</label>
                    <textarea
                        rows={4}
                        className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                        placeholder="Describe your partnership objectives..."
                    />
                </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
                <Handshake className="h-5 w-5" />
                Submit Partnership Request
            </button>
            </form>
        </motion.div>
        </div>
    );
};

export default PartnershipForm;