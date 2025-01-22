import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Share2,
  Users,
  ArrowRight,
  Quote,
  Trophy,
  Calendar,
  Rocket,
  Target,
  Lightbulb,
  Heart,
  Send,
  X,
  TreePine,
  Building,
  Briefcase,
  Link as LinkIcon
} from 'lucide-react';
import SubmitStoryForm from '../forms/SubmitStoryForm';

const SuccessStoryDetailPage = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  // Mock success story data
  const story = {
    title: "Sarah Chen's Journey to Success",
    tagline: "From Vision to Reality: Building a Global Tech Empire",
    heroImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    profile: {
      name: "Sarah Chen",
      designation: "Founder & CEO",
      company: "TechGrowth Solutions",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      industry: "AI & Machine Learning",
    },
    beginning: {
      vision: "To democratize AI technology for businesses of all sizes",
      challenge: "Starting with just a laptop and a dream in a small apartment",
      inspiration: "Witnessing small businesses struggle with digital transformation",
      quote: "Every challenge was a stepping stone towards building something meaningful.",
    },
    milestones: [
      {
        date: "2019",
        title: "Founded TechGrowth Solutions",
        description: "Started the company with a team of three developers",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      },
      {
        date: "2020",
        title: "Joined Tech Valley Hub STP",
        description: "Accelerated growth through mentorship and resources",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      },
      {
        date: "2021",
        title: "Secured Series A Funding",
        description: "$10M investment to scale operations",
        image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&q=80",
      },
      {
        date: "2022",
        title: "Global Expansion",
        description: "Opened offices in 5 countries",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80",
      },
    ],
    challenges: [
      {
        title: "Market Skepticism",
        description: "Overcame initial doubts about AI accessibility",
        solution: "Developed user-friendly demos and free trials",
      },
      {
        title: "Scaling Challenges",
        description: "Managing rapid team growth",
        solution: "Implemented structured onboarding and mentorship programs",
      },
      {
        title: "Technical Hurdles",
        description: "Building reliable AI infrastructure",
        solution: "Partnered with leading cloud providers",
      },
    ],
    impact: {
      metrics: [
        { label: "Clients Served", value: "500+" },
        { label: "Jobs Created", value: "200+" },
        { label: "Countries Reached", value: "25+" },
        { label: "Success Rate", value: "95%" },
      ],
      vision: "Expanding AI accessibility to emerging markets and empowering the next generation of tech entrepreneurs.",
    },
    relatedStories: [
      {
        id: 1,
        title: "From Startup to Industry Leader",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
        excerpt: "How David Kim transformed the fintech landscape",
      },
      {
        id: 2,
        title: "Breaking Barriers in Tech",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
        excerpt: "Maria Rodriguez's journey in cybersecurity",
      },
      {
        id: 3,
        title: "Innovation in Healthcare Tech",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        excerpt: "Dr. James Chen's revolutionary healthcare platform",
      },
    ],
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-forest-900 rounded-xl p-8 max-w-md w-full mx-4 relative"
      >
        <button
          onClick={() => setShowShareModal(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Share This Story</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 glass-effect rounded-lg">
            <div className="flex items-center">
              <LinkIcon className="h-5 w-5 mr-3 text-primary-400" />
              <span className="text-sm">https://success.story/sarah-chen</span>
            </div>
            <button className="text-primary-400 hover:text-primary-300">Copy</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full bg-[#1DA1F2] hover:bg-[#1a8cd8] py-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
              Twitter
            </button>
            <button className="w-full bg-[#0A66C2] hover:bg-[#094c8f] py-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
              LinkedIn
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-greenish-gray">
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${story.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TreePine className="h-16 w-16 mx-auto mb-6 text-green-400 animate-float" />
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">{story.title}</h1>
            <p className="text-xl text-green-300 mb-8">{story.tagline}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowShareModal(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Share This Story
                <Share2 className="ml-2 h-5 w-5" />
              </button>
              <a
                href="/success-stories"
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-dark-greenish-gray py-20">
        <div className="max-w-7xl mx-auto px-4 py-10 rounded-lg sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold mb-6">Meet {story.profile.name}</h2>
              <div className="space-y-4 text-white">
                <div className="flex items-center justify-center md:justify-start">
                  <Briefcase className="h-5 w-5 mr-2 text-green-400" />
                  {story.profile.designation}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Building className="h-5 w-5 mr-2 text-green-400" />
                  {story.profile.company}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Target className="h-5 w-5 mr-2 text-green-400" />
                  {story.profile.industry}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={story.profile.image}
                alt={story.profile.name}
                className="w-64 h-64 mx-auto rounded-full object-cover ring-4 ring-green-400"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Journey Overview Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Rocket className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl text-whitefont-bold mb-4">The Beginning</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl p-6"
              >
                <Lightbulb className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">The Vision</h3>
                <p className="text-green-400">{story.beginning.vision}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl p-6"
              >
                <Target className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Initial Challenge</h3>
                <p className="text-green-400">{story.beginning.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl p-6"
              >
                <Heart className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">The Inspiration</h3>
                <p className="text-green-400">{story.beginning.inspiration}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-effect bg-dark-greenish-gray rounded-xl p-8 flex items-center"
            >
              <div>
                <Quote className="h-12 w-12 text-green-400 mb-6" />
                <p className="text-xl italic mb-6">{story.beginning.quote}</p>
                <div className="flex items-center">
                  <img
                    src={story.profile.image}
                    alt={story.profile.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{story.profile.name}</p>
                    <p className="text-green-400">{story.profile.designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Trophy className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-green-400">Milestones that shaped the journey</p>
          </motion.div>

          <div className="space-y-12">
            {story.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-black rounded-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 mr-2 text-green-400" />
                      <span className="text-green-400">{milestone.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                    <p className="text-green-400">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Target className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Overcoming Challenges</h2>
            <p className="text-green-400">Turning obstacles into opportunities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {story.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white mb-2">{challenge.description}</p>
                    <div className="h-px bg-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-white mb-2">Solution:</p>
                    <p className="text-white">{challenge.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Heart className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Making an Impact</h2>
            <p className="text-green-400">Creating lasting change in the industry</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {story.impact.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-black rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-white">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect bg-black rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
            <p className="text-green-400 max-w-3xl mx-auto">{story.impact.vision}</p>
          </motion.div>
        </div>
      </div>

      {/* Related Stories Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">More Inspiring Journeys</h2>
            <p className="text-green-400">Discover other success stories</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {story.relatedStories.map((relatedStory, index) => (
              <motion.div
                key={relatedStory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl overflow-hidden group hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={relatedStory.image}
                    alt={relatedStory.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedStory.title}</h3>
                  <p className="text-white mb-4">{relatedStory.excerpt}</p>
                  <button className="text-green-400 hover:text-green-300 inline-flex items-center">
                    Read Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-xl p-8 text-center"
          >
            <TreePine className="h-12 w-12 mx-auto mb-4 text-green-400 animate-float" />
            <h2 className="text-3xl font-bold mb-4">Inspired to Start Your Journey?</h2>
            <p className="text-green-400 mb-8 max-w-2xl mx-auto">
              Your success story could inspire the next generation of innovators.
              Join our community and share your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowSubmitForm(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Share Your Story
                <Send className="ml-2 h-5 w-5" />
              </button>
              <a
                href="/join"
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Join Our Community
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && <ShareModal />}

      {/* Submit Story Modal */}
      {showSubmitForm && <SubmitStoryForm setShowSubmitForm={setShowSubmitForm} />}
    </div>
  );
};

export default SuccessStoryDetailPage;