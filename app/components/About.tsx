import type React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description:
        'Creating beautiful and intuitive user interfaces with great user experience.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description:
        'Optimizing applications for speed, accessibility, and search engines.',
    },
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              I'm a passionate developer who loves creating digital experiences
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              <p>
                With over 2 years of experiencebuilding modern, responsive web
                applications. I specialize in technologies like React, Next.js,
                and TypeScript, with a growing interest in backend development
                using NestJS,I’m passionate about writing clean, maintainable
                code and creating seamless user experiences. Currently, I’m
                focused on becoming a well-rounded software engineer and
                building real-world projects that solve meaningful problems. My
                goal is to not only grow as a developer but also to help others
                by sharing knowledge and eventually becoming a software
                development consultant.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
