import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, Users, Clock, Mail, Phone, Send, Wifi, Coffee, Monitor, FlaskRound as Flask, Network, Rocket, X, TreePine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const STPDetailPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`${link}`);
  }

  // Mock STP data
  const stpData = {
    name: 'Tech Valley Hub',
    location: 'Silicon Valley, CA',
    tagline: 'Empowering Innovation, Building the Future',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    stats: {
      established: 2015,
      area: '500,000 sq ft',
      companies: 200,
      jobs: '10,000+',
    },
    description: 'Tech Valley Hub is a state-of-the-art technology park designed to foster innovation and collaboration. Our world-class facilities and supportive ecosystem help startups and established companies thrive in the digital age.',
    facilities: [
      {
        icon: Monitor,
        name: 'Co-Working Spaces',
        description: 'Modern workspaces with 24/7 access',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      },
      {
        icon: Rocket,
        name: 'Incubation Centers',
        description: 'Dedicated support for startups',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      },
      {
        icon: Wifi,
        name: 'High-Speed Internet',
        description: '5G and fiber connectivity',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      },
      {
        icon: Network,
        name: 'Conference Rooms',
        description: 'Fully equipped meeting spaces',
        image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80',
      },
      {
        icon: Flask,
        name: 'Research Labs',
        description: 'Advanced research facilities',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
      },
      {
        icon: Coffee,
        name: 'Recreational Areas',
        description: 'Cafes and relaxation zones',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
      },
    ],
    events: [
      {
        id: 1,
        title: 'Tech Innovation Summit 2024',
        date: '2024-03-15',
        time: '09:00 AM - 05:00 PM',
        description: 'Annual gathering of tech leaders and innovators.',
      },
      {
        id: 2,
        title: 'Startup Pitch Day',
        date: '2024-03-20',
        time: '02:00 PM - 06:00 PM',
        description: 'Showcase your startup to potential investors.',
      },
      {
        id: 3,
        title: 'AI Workshop Series',
        date: '2024-03-25',
        time: '10:00 AM - 04:00 PM',
        description: 'Hands-on workshop on latest AI technologies.',
      },
    ],
    contact: {
      address: '123 Innovation Drive, Silicon Valley, CA 94025',
      phone: '+1 (555) 123-4567',
      email: 'contact@techvalleyhub.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...',
    },
  };

  const ContactForm = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-forest-900 rounded-xl p-8 max-w-2xl w-full mx-4 relative"
      >
        <button
          onClick={() => setShowContactForm(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );

  const MembershipForm = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-forest-900 rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={() => setShowMembershipForm(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl font-bold mb-6">Apply for Membership</h3>
        <form className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Organization Details
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Organization Name</label>
                <input
                  type="text"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <select className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                  <option value="">Select industry</option>
                  <option value="software">Software Development</option>
                  <option value="ai">AI/ML</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="iot">IoT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Team Size</label>
                <input
                  type="number"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Number of team members"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person</label>
                  <input
                    type="text"
                    className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Position</label>
                  <input
                    type="text"
                    className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                    placeholder="Job title"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Space Requirements
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Required Space</label>
                <select className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                  <option value="">Select space requirement</option>
                  <option value="desk">Individual Desk</option>
                  <option value="small">Small Office (2-5 people)</option>
                  <option value="medium">Medium Office (6-15 people)</option>
                  <option value="large">Large Office (16+ people)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Move-in Timeline</label>
                <select className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500">
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Requirements</label>
            <textarea
              rows={4}
              className="w-full bg-forest-800 border border-forest-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary-500"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Rocket className="h-5 w-5" />
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-greenish-gray">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${stpData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm" />
        <div className="relative text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TreePine className="h-16 w-16 mx-auto mb-6 text-green-400 animate-float" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{stpData.name}</h1>
            <div className="flex items-center justify-center text-green-400 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {stpData.location}
            </div>
            <p className="text-xl text-green-400 mb-8">{stpData.tagline}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Contact STP
                <Mail className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setShowMembershipForm(true)}
                className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                Apply for Membership
                <Users className="ml-2 h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About {stpData.name}</h2>
            <p className="text-green-400 max-w-3xl mx-auto">{stpData.description}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-effect bg-black rounded-xl p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <div className="text-2xl font-bold mb-2">{stpData.stats.established}</div>
              <div className="text-white">Established</div>
            </div>
            <div className="glass-effect bg-black rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <div className="text-2xl font-bold mb-2">{stpData.stats.area}</div>
              <div className="text-white">Total Area</div>
            </div>
            <div className="glass-effect bg-black rounded-xl p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <div className="text-2xl font-bold mb-2">{stpData.stats.companies}</div>
              <div className="text-white">Companies</div>
            </div>
            <div className="glass-effect bg-black rounded-xl p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-green-400" />
              <div className="text-2xl font-bold mb-2">{stpData.stats.jobs}</div>
              <div className="text-white">Jobs Created</div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Facilities at {stpData.name}</h2>
            <p className="text-green-400">World-class infrastructure for your success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stpData.facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-dark-greenish-gray rounded-xl overflow-hidden group hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-transparent" />
                </div>
                <div className="p-6">
                  <facility.icon className="h-8 w-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                  <p className="text-green-400">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Calendar className="h-12 w-12 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-green-400">Join our community events and workshops</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {stpData.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect bg-black rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-2 text-white mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-green-400" />
                    {event.time}
                  </div>
                </div>
                <p className="text-white mb-4">{event.description}</p>
                <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition-colors duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleNavigate(`/events`)} 
              className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              >
              View All Events
              <Calendar className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-green-400">We're here to help you grow</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-effect bg-dark-greenish-gray rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <MapPin className="h-5 w-5 mr-3 text-green-400" />
                    {stpData.contact.address}
                  </div>
                  <div className="flex items-center text-white">
                    <Phone className="h-5 w-5 mr-3 text-green-400" />
                    <a href={`tel:${stpData.contact.phone}`} className="hover:text-green-400">
                      {stpData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-white">
                    <Mail className="h-5 w-5 mr-3 text-green-400" />
                    <a href={`mailto:${stpData.contact.email}`} className="hover:text-green-400">
                      {stpData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect bg-dark-greenish-gray rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-white">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect bg-dark-greenish-gray rounded-xl overflow-hidden">
              {/* Replace with actual map implementation */}
              <div className="h-full min-h-[400px] bg-forest-800 flex items-center justify-center">
                <p className="text-green-400">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm />}

      {/* Membership Form Modal */}
      {showMembershipForm && <MembershipForm />}
    </div>
  );
};

export default STPDetailPage;