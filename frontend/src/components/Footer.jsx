import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const links = {
    company: [ 
              { title: 'About Us', hRef: 'about-us' }, 
              { title: 'Careers', hRef: 'careers' }, 
              { title: 'Press', hRef: 'press' }, 
              { title: 'Blog', hRef: 'blog' }
            ],
    resources: [
                { title: 'Documentation', hRef: '/documentation' },
                { title: 'Support', hRef: '/support'  },
                { title: 'Terms of Service', hRef: '/terms-of-service'  },
                { title: 'Privacy Policy', hRef: '/privacy-policy'  }
              ],
    community: [
                { title: 'Success Stories', hRef: '/success-stories' },
                { title: 'Events', hRef: '/events' },
                { title: 'Testimonials', hRef: '/testimonials' },
                { title: 'Newsletter', hRef: '/newsletter' }
              ]
  };

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">TalentHub</h3>
            <p className="text-gray-400 mb-4">Connecting talent with opportunities worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
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
                    <a href={item.hRef} className="text-gray-400 hover:text-green-400">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TalentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;