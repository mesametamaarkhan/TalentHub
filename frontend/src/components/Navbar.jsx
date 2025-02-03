import React from 'react';
import { Menu, X, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold ml-2">TalentHub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <a href="/" className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium text-white">
              Home
            </a>
            <a
              href="/freelancers"
              className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium text-white"
            >
              Freelancers
            </a>
            <a
              href="/companies"
              className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium text-white"
            >
              Companies
            </a>
            <a
              href="/internships"
              className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium text-white"
            >
              Internships
            </a>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button
                className="text-white hover:text-green-400 flex items-center justify-center"
              >
                <Bell className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/f-profile/1')}
                className="text-white hover:text-green-400 flex items-center justify-center"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white">
              Home
            </a>
            <a
              href="/freelancers"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Freelancers
            </a>
            <a
              href="/companies"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Companies
            </a>
            <a
              href="/internships"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Internships
            </a>

            {/* Notification and User Icons in Mobile Menu */}
            <div className="flex space-x-4 px-3 py-2">
              <button
                className="text-white hover:text-green-400 flex items-center justify-center"
              >
                <Bell className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigate('/f-profile/1')}
                className="text-white hover:text-green-400 flex items-center justify-center"
              >
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
