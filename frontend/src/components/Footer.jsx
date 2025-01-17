import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const links = {
    company: ['About Us', 'Careers', 'Press', 'Blog'],
    solutions: ['For Freelancers', 'For Companies', 'For Students', 'Enterprise'],
    resources: ['Documentation', 'Support', 'Terms of Service', 'Privacy Policy'],
    community: ['Success Stories', 'Events', 'Testimonials', 'Newsletter']
  };

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">TalentHub</h3>
            <p className="text-gray-400 mb-4">Connecting talent with opportunities worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} T alentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;