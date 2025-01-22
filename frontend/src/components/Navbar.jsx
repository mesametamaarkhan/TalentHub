import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="TalentHub Logo"
              className="h-8 w-auto" // Adjust height and width as needed
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
              <a
                href="/tech-leads"
                className="hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium text-white"
              >
                Tech Leads
              </a>
              <a
                href="/success-stories"
                className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                Success Stories
              </a>
              <a
                href="/events"
                className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                Events
              </a>
              <button
                onClick={() => navigate('/login')}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium text-white"
              >
                Sign In
              </button>
            </div>
          </div>

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
            <a
              href="/tech-leads"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Tech Leads
            </a>
            <a
              href="/tech-leads"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Success Stories
            </a>
            <a
              href="/tech-leads"
              className="hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
              Events
            </a>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium text-white"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
