import type React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'HTML', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
        // { name: 'PostgreSQL', level: 65 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        // { name: 'AWS', level: 55 },
        { name: 'Figma', level: 50 },
        { name: 'Webpack', level: 65 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20  transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                My Expertise
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-700 dark:text-gray-300">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies I use to bring
              ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2"
              >
                {/* Category header with icon */}
                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      index === 0
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : index === 1
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                        : 'bg-gradient-to-br from-purple-500 to-pink-600'
                    }`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills as floating badges */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`relative px-4 py-2 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer ${
                        index === 0
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                          : index === 1
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                          : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                      }`}
                    >
                      <span className="relative z-10">{skill.name}</span>

                      {/* Skill level indicator as corner badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                          {skill.level >= 90
                            ? '★'
                            : skill.level >= 80
                            ? '●'
                            : skill.level >= 70
                            ? '◆'
                            : '◇'}
                        </span>
                      </div>

                      {/* Hover tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {skill.level}% proficiency
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Skill Level Legend */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">★</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Expert (90%+)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">●</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced (80%+)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">◆</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Intermediate (70%+)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">◇</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Beginner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Next.js',
                'Tailwind CSS',
                'Angular',
                'Redux',
                'Jest',
                'Cypress',
                'Vue.js',
                'Supabase',
                'Vercel',
                'Netlify',
                'Firebase',
                'Render',
                'React Query',
                'Three.js',
                'Framer Motion',
                'Angular Material',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Let's Build Something Amazing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
