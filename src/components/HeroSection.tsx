
import React from 'react';
import ParticleBackground from './ParticleBackground';
import { ArrowDown, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-[1]"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="block">Hi, I'm</span> 
          <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent">
            D Varun
          </span>
        </h1>
        
        <div className="overflow-hidden h-20 md:h-24">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in">
            Software Engineer specializing in AI & Machine Learning
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 rounded-xl group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-6 rounded-xl"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FileText className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
