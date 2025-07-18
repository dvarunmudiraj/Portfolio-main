
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-2xl font-heading font-bold text-white hover:text-neon-purple transition-colors">
              D<span className="text-neon-purple">.</span>VARUN
            </a>
            <p className="mt-2 text-gray-400 text-sm">Software Engineer specializing in AI & Machine Learning</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a 
              href="https://github.com/dvarunmudiraj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/d-varun-url" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neon-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:varunmudiraj154@gmail.com" 
              className="text-gray-400 hover:text-neon-pink transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} D Varun. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-neon-purple transition-colors"
            aria-label="Scroll to top"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
