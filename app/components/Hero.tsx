import type React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden  pt-16 transition-colors duration-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for work
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white transition-colors duration-300">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse">
                  John Doe
                </span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Full Stack Developer
                </h2>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    & UI/UX Enthusiast
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
                I craft beautiful, responsive web applications with modern
                technologies.
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {' '}
                  Passionate about clean code
                </span>
                , exceptional user experiences, and continuous innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-300 dark:hover:border-indigo-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View My Work
              </a>
            </div>

            {/* Social links with enhanced styling */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com',
                  label: 'GitHub',
                  color: 'hover:bg-gray-800',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  color: 'hover:bg-blue-600',
                },
                {
                  icon: Mail,
                  href: 'mailto:john@example.com',
                  label: 'Email',
                  color: 'hover:bg-red-500',
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className={`group flex items-center justify-center w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-600 ${color} hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* Download CV button */}
            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200 group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Enhanced profile image section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating elements around profile */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-80 animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce animation-delay-2000"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg rotate-45 opacity-80 animate-bounce animation-delay-3000"></div>

              {/* Main profile container */}
              <div className="relative group">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

                {/* Profile image */}
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="John Doe - Full Stack Developer"
                    className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay with tech icons */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute -top-4 left-8 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    React
                  </span>
                </div>
                <div className="absolute top-12 -right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    TypeScript
                  </span>
                </div>
                <div className="absolute bottom-8 -left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
