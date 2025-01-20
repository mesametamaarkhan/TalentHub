import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, Users, Camera, Send, X, ChevronLeft, ChevronRight, TreePine} from 'lucide-react';
import CalendarPanel from '../components/CalendarPanel';

const EventsPage = () => {
    const [showSubmitForm, setShowSubmitForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendarPanel, setShowCalendarPanel] = useState(false);
    const [selectedView, setSelectedView] = useState('upcoming');

    // Mock upcoming events
    const upcomingEvents = [
        {
            id: 1,
            title: 'Tech Innovation Summit 2024',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
            date: '2024-03-15',
            time: '09:00 AM - 05:00 PM',
            location: 'San Francisco Convention Center',
            type: 'In-Person',
            description: 'Join industry leaders for a day of insights into emerging technologies and sustainable development practices.',
            attendees: 500,
        },
        {
            id: 2,
            title: 'Web3 Development Workshop',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80',
            date: '2024-03-20',
            time: '02:00 PM - 04:00 PM',
            location: 'Online',
            type: 'Virtual',
            description: 'Learn the fundamentals of Web3 development with hands-on coding sessions.',
            attendees: 200,
        },
    ];

    // Mock past events
    const pastEvents = [
        {
            id: 3,
            title: 'AI Ethics Conference',
            image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
            date: '2024-02-10',
            time: '10:00 AM - 06:00 PM',
            location: 'Tech Hub NYC',
            type: 'In-Person',
            description: 'A deep dive into ethical considerations in AI development.',
            highlights: ['500+ attendees', '12 keynote speakers', '8 workshop sessions'],
        },
        {
            id: 4,
            title: 'DevOps Best Practices Webinar',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
            date: '2024-02-05',
            time: '03:00 PM - 05:00 PM',
            location: 'Online',
            type: 'Virtual',
            description: 'Industry experts shared insights on modern DevOps practices.',
            highlights: ['1000+ participants', '4 technical sessions', 'Live Q&A'],
        },
    ];

    const EventSubmissionForm = () => (
        <div className="fixed inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={() => setShowSubmitForm(false)}
                    className="absolute right-4 top-4 text-white hover:text-white"
                >
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-2xl font-bold mb-6">Submit Event Request</h3>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Event Title</label>
                        <input
                            type="text"
                            className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-white"
                            placeholder="Enter event title"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Date</label>
                            <input
                                type="date"
                                className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Time</label>
                            <input
                                type="time"
                                className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input
                            type="text"
                            className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-white"
                            placeholder="Enter location or 'Online' for virtual events"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            rows={4}
                            className="w-full bg-dark-greenish-gray border border-green-700 rounded-lg py-2 px-4 focus:ring-white"
                            placeholder="Describe your event..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Promotional Materials</label>
                        <div className="bg-dark-greenish-gray border-2 border-dashed border-green-700 rounded-lg p-8 text-center">
                            <Camera className="h-8 w-8 mx-auto mb-4 text-green-400" />
                            <p className="text-sm text-gray-400 mb-2">Upload event banner or promotional materials</p>
                            <p className="text-xs text-gray-500">Supported formats: JPG, PNG (max 5MB)</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        <Send className="h-5 w-5" />
                        Submit Event Request
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80")',
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
                        <TreePine className="h-16 w-16 mx-auto mb-6 text-green-400 animate-float" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
                        <p className="text-xl text-white mb-8">
                            Stay updated on workshops, webinars, and networking opportunities
                        </p>
                        <button
                            onClick={() => setShowCalendarPanel(true)}
                            className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
                        >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            View Calendar
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* View Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="glass-effect bg-green-800 rounded-lg p-1 inline-flex">
                        <button
                            onClick={() => setSelectedView('upcoming')}
                            className={`px-6 py-2 rounded-md transition-colors duration-50 ${
                                selectedView === 'upcoming' ? 'bg-green-600' : 'hover:bg-green-800'
                            }`}
                        >
                        Upcoming Events
                        </button>
                        <button
                            onClick={() => setSelectedView('past')}
                            className={`px-6 py-2 rounded-md transition-colors duration-50 ${
                                selectedView === 'past' ? 'bg-green-600' : 'hover:bg-green-800'
                            }`}
                        >
                        Past Events
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {(selectedView === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-effect bg-black rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-green-600 text-sm px-3 py-1 rounded-full">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-white">
                                        <CalendarIcon className="h-4 w-4 mr-2" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center text-white">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center text-white">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        {event.location}
                                    </div>
                                    {event.attendees && (
                                        <div className="flex items-center text-white">
                                        <Users className="h-4 w-4 mr-2" />
                                        {event.attendees} expected attendees
                                        </div>
                                    )}
                                </div>
                                <p className="text-white mb-6">{event.description}</p>
                                {selectedView === 'upcoming' ? (
                                <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition-colors duration-300">
                                    Register Now
                                </button>
                                ) : (
                                <div>
                                    <h4 className="font-medium mb-2">Event Highlights:</h4>
                                    <ul className="list-disc list-inside text-white">
                                    {event.highlights.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    ))}
                                    </ul>
                                </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Host Event CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-effect bg-black rounded-xl p-8 text-center"
                >
                    <TreePine className="h-12 w-12 mx-auto mb-4 text-green-400 animate-float" />
                    <h2 className="text-2xl font-bold mb-4">Host Your Event With Us!</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Share your knowledge and expertise with our community. Submit your event proposal and reach thousands of tech professionals.
                    </p>
                    <button
                        onClick={() => setShowSubmitForm(true)}
                        className="bg-green-600 hover:bg-green-700 py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
                    >
                        Submit Event Request
                        <Send className="ml-2 h-5 w-5" />
                    </button>
                </motion.div>
            </div>

            {/* Calendar Panel */}
            {showCalendarPanel && (
                <CalendarPanel
                    isOpen={showCalendarPanel}
                    onClose={() => setShowCalendarPanel(false)}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    events={upcomingEvents}
                />
            )}

            {/* Event Submission Form */}
            {showSubmitForm && <EventSubmissionForm />}
        </div>
    );
};

export default EventsPage;