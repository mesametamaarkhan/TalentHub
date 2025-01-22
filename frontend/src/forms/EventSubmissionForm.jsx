import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Clock, Users, Camera, Send, X, ChevronLeft, ChevronRight, TreePine} from 'lucide-react';
import CalendarPanel from '../components/CalendarPanel';

const EventSubmissionForm = ({ setShowSubmitForm }) => {
    return (
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
};

export default EventSubmissionForm;