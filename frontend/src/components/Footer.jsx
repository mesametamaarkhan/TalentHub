import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TalentHub</h3>
            <p className="text-gray-300 mb-4">
              Connecting talent with opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Freelancers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent">Find Work</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Create Profile</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Resources</a></li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Companies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent">Post a Job</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Find Talent</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Case Studies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} TalentHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;