import {
  Brain,
  Code,
  Laptop,
  PenTool,
  Users,
  LineChart,
  Lightbulb,
  Clock,
} from 'lucide-react';

export const skills = {
  technical: [
    // { name: 'JavaScript / TypeScript', level: 95 },
    // { name: 'React / Next.js', level: 90 },
    { name: 'Operating Systems(Windows, Linux)', level: 85 },
    {
      name: 'Security Tools/Softwares(Nessus, OpenVAS, Burp Suite, Wireshark, Gidhra, Nmap)',
      level: 65,
    },
    // { name: 'HTML / CSS / Tailwind', level: 95 },
    // { name: 'UI/UX Design', level: 80 },
    { name: 'MongoDB / SQL', level: 60 },
    { name: 'Programmiing Languages(Python, C/C++, Java)', level: 70 },
  ],
  professional: [
    {
      name: 'Problem Solving',
      description:
        'Ability to analyze complex problems and find effective solutions.',
      icon: Brain,
    },
    {
      name: 'Ethical Mindset',
      description:
        'Upholding a strong sense of integrity, professionalism, and ethical behavior in all security activities.',
      icon: Code,
    },
    {
      name: 'Adaptability',
      description:
        'Keeping up with rapidly changing cybersecurity trends, tools, and threat landscapes.',
      icon: Laptop,
    },
    // {
    //   name: 'UI/UX Design',
    //   description: 'Designing intuitive and beautiful user experiences.',
    //   icon: PenTool,
    // },
    {
      name: 'Team Collaboration',
      description: 'Working effectively within cross-functional teams.',
      icon: Users,
    },
    // {
    //   name: 'Data Analysis',
    //   description: 'Extracting insights from complex datasets.',
    //   icon: LineChart,
    // },
    // {
    //   name: 'Innovation',
    //   description: 'Bringing creative solutions to challenging problems.',
    //   icon: Lightbulb,
    // },
    // {
    //   name: 'Time Management',
    //   description: 'Efficiently managing projects and meeting deadlines.',
    //   icon: Clock,
    // },
  ],
};
