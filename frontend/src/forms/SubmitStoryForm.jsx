import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Quote, Camera, ArrowRight, Send, X } from 'lucide-react';

const SubmitStoryForm = ({ setShowSubmitForm }) => (
    <div className="fixed inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black rounded-xl p-8 max-w-2xl w-full mx-4 relative"
        >
            <button
                onClick={() => setShowSubmitForm(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
            <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold mb-6">Share Your Success Story</h3>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                    type="text"
                    className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                    type="email"
                    className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Your email"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Your Story</label>
                    <textarea
                    rows={6}
                    className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Share your journey and success..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Media (Optional)</label>
                    <div className="bg-dark-greenish-gray border-2 border-dashed border-green-700 rounded-lg p-8 text-center">
                        <Camera className="h-8 w-8 mx-auto mb-4 text-green-400" />
                        <p className="text-sm text-white mb-2">Drag and drop files here, or click to select</p>
                        <p className="text-xs text-white">Supported formats: JPG, PNG, MP4 (max 10MB)</p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <Send className="h-5 w-5" />
                    Submit Your Story
                </button>
            </form>
        </motion.div>
    </div>
  );

export default SubmitStoryForm;