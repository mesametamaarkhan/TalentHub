import React from 'react';
import { Menu, X, Users, Briefcase, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">TalentHub</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Freelancers</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Companies</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Internships</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">Sign In</button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Freelancers</a>
            <a href="#" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Companies</a>
            <a href="#" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Internships</a>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;