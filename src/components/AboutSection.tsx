
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div ref={sectionRef} className="glass-card p-8 max-w-4xl mx-auto hidden-element">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">D Varun</h3>
              <p className="text-gray-300 mb-4">
                Goal-driven, detail-oriented Software Engineer graduate student specializing in Artificial Intelligence. 
                Eager to bring skills towards development of innovative projects in software engineering and machine 
                learning. Desiring to enhance technical capabilities and problem-solving skills, constantly developing within 
                an evolving tech world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <p className="text-gray-400 mb-1">Email:</p>
                  <p className="text-neon-blue">varunmudraj154@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone:</p>
                  <p className="text-neon-blue">+91-888888888</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-medium">ACE Engineering College (B.Tech)</h4>
                  <p className="text-neon-purple text-sm whitespace-nowrap">JUL 2021 - JUL 2025</p>
                </div>
                <p className="text-gray-400">Computer Science and Engineering</p>
                <p className="text-gray-300">CGPA: 9.0/10</p>
                <p className="text-gray-400 mt-1">Specialization in Artificial Intelligence</p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-medium">Vishra Junior College</h4>
                  <p className="text-neon-purple text-sm whitespace-nowrap">MAR 2021</p>
                </div>
                <p className="text-gray-400">MATHS PHYSICS CHEMISTRY</p>
                <p className="text-gray-300">CGPA: 9.54/10</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-medium">Vidya Dayini High School</h4>
                  <p className="text-neon-purple text-sm whitespace-nowrap">MAY 2019</p>
                </div>
                <p className="text-gray-400">Secondary School Certificate</p>
                <p className="text-gray-300">GPA: 9.5/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
