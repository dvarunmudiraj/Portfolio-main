
import React, { useEffect, useRef } from 'react';
import { FileText, Download, Award, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
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

  const certifications = [
    "Business English Certificate Preliminary: Cambridge English Entry Level Certificate.",
    "Cisco: CCNA Programming essential in C, PCAP Programming essentials in Python.",
    "Salesforce: Salesforce Developer Virtual Internship.",
    "UiPath: Automation Explorer."
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            Resume & Certifications
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div ref={sectionRef} className="glass-card p-6 w-full lg:w-2/3 hidden-element">
            <div className="mb-6">
              <div className="flex items-center">
                <FileText className="text-neon-purple mr-2" size={24} />
                <h3 className="text-2xl font-bold">Resume Overview</h3>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-neon-blue mb-2">Career Objective</h4>
                <p className="text-gray-300">
                  Goal-driven, detail-oriented Software Engineer graduate student specializing in Artificial Intelligence. 
                  Eager to bring skills towards development of innovative projects in software engineering and machine 
                  learning. Desiring to enhance technical capabilities and problem-solving skills, constantly developing within 
                  an evolving tech world.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-neon-blue mb-4">Experience Timeline</h4>
              
              <div className="relative border-l-2 border-neon-purple/30 pl-6 pb-6">
                {[
                  {
                    title: "Scalable URL Shortener with Analytics",
                    role: "Full Stack Dev",
                    period: "JUL 2025"
                  },
                  {
                    title: "Portable Object Detection in Real-Time",
                    role: "BackEnd Dev",
                    period: "DEC 2024 - FEB 2025"
                  },
                  {
                    title: "Faculty Presence Detection in Real-Time",
                    role: "BackEnd Dev",
                    period: "SEP 2024 - NOV 2024"
                  },
                  {
                    title: "Image Classification Using CNN",
                    role: "BackEnd Dev",
                    period: "JUN 2024 - JUL 2024"
                  },
                  {
                    title: "Task Scheduling Application",
                    role: "Full Stack Dev",
                    period: "MAY 2024"
                  }
                ].map((item, index) => (
                  <div key={index} className="mb-6 relative">
                    <div className="absolute -left-[34px] bg-background p-1">
                      <div className="w-4 h-4 rounded-full bg-neon-purple"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <h5 className="text-white font-medium">{item.title}</h5>
                      <div className="flex items-center text-neon-purple text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-neon-blue mt-1">{item.role}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button 
                  className="bg-neon-purple hover:bg-neon-purple/90 text-white"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" /> Download Full Resume
                </Button>
              </div>
            </div>
          </div>
          
          <div ref={sectionRef} className="glass-card p-6 w-full lg:w-1/3 hidden-element" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <Award className="text-neon-blue mr-2" size={24} />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 border border-neon-blue/20 rounded-lg bg-neon-blue/5 hover:bg-neon-blue/10 transition-colors">
                  <p className="text-gray-200">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
