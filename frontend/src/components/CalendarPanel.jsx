import React from 'react';
import { X, Clock, MapPin } from 'lucide-react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';

const CalendarPanel = ({ isOpen, onClose, selectedDate, onDateChange, events }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-greenish-gray/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-black rounded-xl w-full max-w-2xl mx-4 relative"
      >
        <div className="p-6 border-b border-green-700">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-red-900 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold">Event Calendar</h2>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
          <div>
            <Calendar
              onChange={onDateChange}
              value={selectedDate}
              className="w-full bg-dark-greenish-gray border-green-700 rounded-lg p-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Events on {selectedDate.toLocaleDateString()}
            </h3>
            {events.length > 0 ? (
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="glass-effect bg-dark-greenish-gray border border-green-700 rounded-lg p-4 hover:border-green-500/30 transition-all duration-300"
                  >
                    <h4 className="font-medium mb-2">{event.title}</h4>
                    <div className="space-y-2 text-sm text-white">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white text-center py-8">
                No events scheduled for this date
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-green-700">
          <button
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition-colors duration-300"
          >
            Close Calendar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CalendarPanel;
