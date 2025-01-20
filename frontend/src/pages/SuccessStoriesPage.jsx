import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Quote, Camera, ArrowRight, Send, X } from 'lucide-react';

const SuccessStoriesPage = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;

  // Mock featured story
  const featuredStory = {
    id: 1,
    name: 'Sarah Chen',
    title: 'From Junior Dev to Tech Lead in 18 Months',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    role: 'Senior Technical Lead',
    company: 'EcoTech Solutions',
    quote: 'The mentorship and opportunities I found here transformed my career trajectory completely. I went from being a junior developer to leading a team of 12 in just 18 months.',
  };

  // Mock success stories
  const stories = [
    {
      id: 2,
      name: 'David Wilson',
      title: 'Built a 6-Figure Freelance Business',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      role: 'Independent Developer',
      excerpt: 'Leveraging the platforms network, I built a successful freelance business serving clients worldwide.',
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      title: 'From Bootcamp to Big Tech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      role: 'Software Engineer',
      company: 'GreenTech Innovations',
      excerpt: 'After completing my bootcamp, I found my first role through the platforms job board.',
    },
    // Add more stories as needed
  ];

  const SubmitStoryForm = () => (
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

  return (
    <div className="min-h-screen bg-dark-greenish-gray">
      {/* Hero Section */}
        <div
            className="relative h-96 flex items-center justify-center"
            style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm" />
            <div className="relative text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Leaf className="h-16 w-16 mx-auto mb-6 text-green-600 animate-float" />
                    <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">Success Stories</h1>
                    <p className="text-xl text-white">
                        Celebrating the journeys of those who dared to grow
                    </p>
                </motion.div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Story */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect bg-black rounded-xl overflow-hidden mb-16"
            >
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={featuredStory.image}
                            alt={featuredStory.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <Quote className="h-12 w-12 text-green-400 mb-6 opacity-50" />
                        <h2 className="text-2xl text-green-400 font-bold mb-4">{featuredStory.title}</h2>
                        <p className="text-gray-300 mb-6 italic">{featuredStory.quote}</p>
                        <div className="flex items-center mb-6">
                            <div className="flex-1">
                            <p className="font-semibold">{featuredStory.name}</p>
                            <p className="text-sm text-green-400">
                                {featuredStory.role} at {featuredStory.company}
                            </p>
                            </div>
                        </div>
                        <button className="text-green-400 hover:text-green-300 py-2 transition-colors duration-300 inline-flex items-center">
                            Read Full Story
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Stories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {stories.map((story, index) => (
                    <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="glass-effect bg-black rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
                    >
                        <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl text-green-400 font-bold mb-2">{story.title}</h3>
                            <p className="text-white mb-4">{story.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{story.name}</p>
                                    <p className="text-sm text-green-400">{story.role}</p>
                                </div>
                                <button className="text-green-400 hover:text-green-300 inline-flex items-center">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mb-16">
                <button className="bg-green-600 hover:bg-green-700 py-2 px-6 rounded-lg transition-colors duration-300">
                    Load More Stories
                </button>
            </div>

            {/* Share Your Story CTA */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect bg-black rounded-xl p-8 text-center"
            >
                <Leaf className="h-12 w-12 mx-auto mb-4 text-green-400 animate-float" />
                <h2 className="text-2xl text-green-400 font-bold mb-4">Your Journey Inspires!</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Share your success story and inspire others in our community. Your experience could be the motivation someone else needs to take their next step.
                </p>
                <button
                    onClick={() => setShowSubmitForm(true)}
                    className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                    Submit Your Story
                    <Send className="ml-2 h-5 w-5" />
                </button>
            </motion.div>
        </div>

        {/* Submit Story Form Modal */}
        {showSubmitForm && <SubmitStoryForm />}
    </div>
  );
};

export default SuccessStoriesPage;