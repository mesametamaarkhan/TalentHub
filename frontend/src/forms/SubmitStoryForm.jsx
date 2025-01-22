import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Quote,
    Heart,
    Send,
    X,
    Building,
    User,
  } from 'lucide-react';

const SubmitStoryForm = ({ setShowSubmitForm}) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-forest-900 rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
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
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Your email address"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Professional Details
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Role</label>
                <input
                  type="text"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Your job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company/Organization</label>
                <input
                  type="text"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Company name"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Quote className="h-5 w-5 mr-2" />
              Your Story
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Story Title</label>
                <input
                  type="text"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Give your story a catchy title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Journey</label>
                <textarea
                  rows={6}
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Share your journey, challenges, and achievements..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Key Milestones</label>
                <textarea
                  rows={4}
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="List your major achievements and milestones..."
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Impact & Future Vision
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Impact Created</label>
                <textarea
                  rows={4}
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Describe the impact of your journey..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Future Vision</label>
                <textarea
                  rows={4}
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Share your future goals and aspirations..."
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Submit Your Story
          </button>
        </form>
      </motion.div>
    </div>
  );


export default SubmitStoryForm;