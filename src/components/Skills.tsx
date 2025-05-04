import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The technologies, tools, and methodologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.professional.map((skill) => (
                <div key={skill.name} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
                  <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                    <skill.icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;