import type React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Fahmedo', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ahmed-faruq-6116a4232/',
      label: 'LinkedIn',
    },
    // { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-xl ">by Fahmedo</span>
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              &copy; 2025 All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="flex items-center justify-center w-10 h-10 bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transform hover:scale-110 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
