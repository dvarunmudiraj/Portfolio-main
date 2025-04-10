
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Layers, 
  Terminal, 
  Server,
  GitBranch, 
  MonitorDot, 
  Cpu 
} from 'lucide-react';

interface SkillProps {
  name: string;
  level?: number;
  icon?: React.ReactNode;
  color?: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
}

const SkillItem = ({ name, icon, color = "neon-purple" }: SkillProps) => {
  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-${color}/20 hover:border-${color}/50 hover:bg-${color}/5 transition-all duration-300`}>
      {icon && <div className={`text-${color}`}>{icon}</div>}
      <span>{name}</span>
    </div>
  );
};

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      },
      { threshold: 0.1 }
    );
    
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    
    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div ref={categoryRef} className="glass-card p-6 hidden-element">
      <div className="flex items-center gap-3 mb-4 text-neon-purple">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const categories: SkillCategoryProps[] = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", icon: <Code size={16} /> },
        { name: "Java", icon: <Code size={16} /> },
        { name: "HTML", icon: <Code size={16} /> },
        { name: "CSS", icon: <Code size={16} /> },
        { name: "JavaScript", icon: <Code size={16} /> },
        { name: "C", icon: <Code size={16} /> },
      ]
    },
    {
      title: "Technologies",
      icon: <Layers size={24} />,
      skills: [
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "Linux/Unix", icon: <Terminal size={16} /> },
        { name: "TensorFlow", icon: <Cpu size={16} /> },
        { name: "Keras", icon: <Layers size={16} /> },
        { name: "OpenCV", icon: <MonitorDot size={16} /> },
        { name: "YOLOv5", icon: <Cpu size={16} /> },
      ]
    },
    {
      title: "Tools",
      icon: <Terminal size={24} />,
      skills: [
        { name: "PyCharm", icon: <Terminal size={16} /> },
        { name: "VS Code", icon: <Code size={16} /> },
        { name: "Git", icon: <GitBranch size={16} /> },
        { name: "Eclipse", icon: <MonitorDot size={16} /> },
        { name: "DBMS", icon: <Database size={16} /> },
        { name: "Operating System", icon: <Server size={16} /> },
      ]
    },
    {
      title: "Other Skills",
      icon: <Layers size={24} />,
      skills: [
        { name: "Data Structures", icon: <Code size={16} /> },
        { name: "Algorithms", icon: <Code size={16} /> },
        { name: "Machine Learning", icon: <Cpu size={16} /> },
        { name: "Deep Learning", icon: <Cpu size={16} /> },
        { name: "NumPy", icon: <Code size={16} /> },
        { name: "Jupyter", icon: <Code size={16} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
