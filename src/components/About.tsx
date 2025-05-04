import React from "react";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      year: "14th Feb, 2025 - Present",
      title: "Information Security Intern",
      organization: "Tsaaro Consulting",
      description:
        "Assist with security testing on organization infrastructure, implementation of privacy frameworks like ISO-27001 and PCI-DSS",
      icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 2,
      year: "April, 2024 - June, 2024",
      title: "Cyber Security Intern",
      organization: "Cyber Secured India",
      description:
        "Actively engaged in structured modules, and hands-on lab tasks, demonstrating continous learning and practical application of skills",
      icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: 3,
      year: "2023 - Present",
      title: "Masters of Computer Applications(MCA)",
      organization: "Guru Gobind Singh Indraprastha University",
      description: "",
      icon: (
        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      id: 4,
      year: "2020 - 2023",
      title: "Bachelors of Computer Applications(BCA)",
      organization: "Guru Gobind Singh Indraprastha University",
      description: "",
      icon: (
        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey, experience, and the path that led me to where I am
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Prajwal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Entry-level cybersecurity professional with hands-on experience in
              vulnerability assessment and a keen interest in offensive
              security. Familiar with tools like Burp Suite, Nmap, and
              Wireshark, and committed to continuously learning and developing
              skills in ethical hacking and system protection.
            </p>

            <div className="mb-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-300 dark:before:bg-blue-700">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="mb-10 last:mb-0">
                <div className="absolute left-0 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-700 z-10">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
