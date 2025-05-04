import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={textRef}
          className="max-w-3xl mx-auto text-center opacity-0 transition-opacity duration-1000"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Hello, I'm
            </span>{" "}
            <span className="relative">
              <span className="relative z-10">Prajwal</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-teal-400/30 dark:bg-teal-600/30 z-0" />
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            Cyber Security Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Passionate about cybersecurity, with a focus on identifying
            vulnerabilities and protecting digital systems. Continuously
            learning and building a solid foundation in security tools and best
            practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
