import type React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Build Africa',
      description:
        'An e-commerce application built with Angular,PHP, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/images/BA.webp',
      technologies: ['Angular', 'PHP', 'MongoDB', 'Vendy'],
      liveUrl: 'https://buildafrica.store',
      // githubUrl: 'https://github.com',
    },
    {
      title: 'BuildCore ',
      description:
        'A centralized organization workflow and collaborative task management application with real-time updates  and team collaboration features.',
      image: '/images/BC.webp',
      technologies: ['Angular', 'PHP', 'MongoDB'],
      liveUrl: 'https://buildcore.buildafrica.store',
      // githubUrl: 'https://github.com',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description:
    //     'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
    //   image: 'https://dummyimage.com/600x400/ffffff/000000',
    //   technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    // },
    {
      title: 'Portfolio ',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      image: '/images/Portfolio.webp',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://fahmedo.vercel.app/',
      // githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-700 dark:text-gray-300">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover my latest work and creative solutions that bring ideas to
              life
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
              >
                {/* Project Image with Enhanced Overlay */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={
                      project.image ||
                      'https://dummyimage.com/600x400/ffffff/000000M'
                    }
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 rounded-t-3xl"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-14 h-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg group/btn"
                      aria-label="View live project"
                    >
                      <ExternalLink
                        size={24}
                        className="group-hover/btn:rotate-12 transition-transform duration-300"
                      />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-14 h-14 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg group/btn"
                        aria-label="View GitHub repository"
                      >
                        <Github
                          size={24}
                          className="group-hover/btn:rotate-12 transition-transform duration-300"
                        />
                      </a>
                    )}
                  </div>

                  {/* Project Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                      Live
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-blue-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-700 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: 'Projects Completed', value: '50+', icon: '🚀' },
              { label: 'Happy Clients', value: '25+', icon: '😊' },
              { label: 'Code Commits', value: '1000+', icon: '💻' },
              { label: 'Coffee Cups', value: '∞', icon: '☕' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Have a project in mind?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                Let's collaborate and bring your ideas to life with cutting-edge
                technology
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
