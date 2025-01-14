import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-accent">TalentHub</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent px-3 py-2">Home</a>
              <a href="#" className="text-gray-300 hover:text-accent px-3 py-2">Freelancers</a>
              <a href="#" className="text-gray-300 hover:text-accent px-3 py-2">Companies</a>
              <a href="#" className="text-gray-300 hover:text-accent px-3 py-2">Internships</a>
              <a href="#" className="text-gray-300 hover:text-accent px-3 py-2">About</a>
              <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md">
                Sign Up
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            <a href="#" className="text-gray-300 hover:text-accent block px-3 py-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-accent block px-3 py-2">Freelancers</a>
            <a href="#" className="text-gray-300 hover:text-accent block px-3 py-2">Companies</a>
            <a href="#" className="text-gray-300 hover:text-accent block px-3 py-2">Internships</a>
            <a href="#" className="text-gray-300 hover:text-accent block px-3 py-2">About</a>
            <button className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;