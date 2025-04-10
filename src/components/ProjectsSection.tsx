
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  period: string;
  role: string;
  keyPoints: string[];
  technologies: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="glass-card overflow-hidden transition-all duration-300 hover:shadow-neon-purple hover:-translate-y-1 hidden-element" 
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-3">
          <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{project.title}</h3>
          <div className="flex items-center text-neon-purple text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{project.period}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="text-neon-blue text-sm font-medium">{project.role}</span>
        </div>
        
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <ul className="space-y-2 mb-4">
          {project.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-neon-purple mr-2">•</span>
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Key Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          {project.github && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="mr-1 h-4 w-4" /> Code
            </Button>
          )}
          {project.demo && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink className="mr-1 h-4 w-4" /> Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Portable Object Detection in Real-Time",
      description: "Implemented real-time object detection using YOLOv5 on live webcam streams.",
      period: "DEC 2024 - FEB 2025",
      role: "BackEnd Dev",
      keyPoints: [
        "Achieved efficient frame processing of 40 FPS with labeled bounding boxes on objects.",
        "Focused on memory and latency optimization for standard laptops.",
      ],
      technologies: ["Python", "OpenCV", "YOLOv5", "NumPy"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Faculty Presence Detection in Real-Time",
      description: "Developed a real-time system to detect and recognize faculty members using facial recognition.",
      period: "SEP 2024 - NOV 2024",
      role: "BackEnd Dev",
      keyPoints: [
        "Used facial databases and facial encoders to boost recognition accuracy.",
        "Enabled live detection through system webcam; no external hardware required.",
      ],
      technologies: ["Python", "OpenCV", "NumPy"],
      github: "https://github.com",
    },
    {
      title: "Task Scheduling Application",
      description: "Designed a responsive task management application using Java and JDBC with a SQL database backend.",
      period: "JUN 2024 - JUL 2024",
      role: "Full Stack Dev",
      keyPoints: [
        "Enhanced data organization with drag-and-drop prioritization of task views.",
        "Enhanced usability with a responsive UI adaptable to mobile and desktop browsers.",
      ],
      technologies: ["Java", "JDBC", "SQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Image Classification Using CNN",
      description: "Developed a deep learning model using Convolutional Neural Networks to classify images into multiple categories.",
      period: "JUN 2024 - JUL 2024",
      role: "BackEnd Dev",
      keyPoints: [
        "Trained the model on a custom dataset using TensorFlow and Keras, achieving over 90% validation accuracy.",
        "Visualized learning metrics and confusion matrix for performance evaluation.",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
      github: "https://github.com",
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
