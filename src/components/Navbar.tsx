
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-black/70 backdrop-blur-lg' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold text-white hover:text-neon-purple transition-colors">
          D<span className="text-neon-purple">.</span>VARUN
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-link px-3 py-2 text-white hover:text-neon-purple transition-colors">About</a>
          <a href="#skills" className="nav-link px-3 py-2 text-white hover:text-neon-purple transition-colors">Skills</a>
          <a href="#projects" className="nav-link px-3 py-2 text-white hover:text-neon-purple transition-colors">Projects</a>
          <a href="#resume" className="nav-link px-3 py-2 text-white hover:text-neon-purple transition-colors">Resume</a>
          <a href="#contact" className="nav-link px-3 py-2 text-white hover:text-neon-purple transition-colors">Contact</a>
          
          <div className="flex items-center ml-4 space-x-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-neon-blue transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              className="ml-2 text-white border border-neon-purple hover:bg-neon-purple/20 transition-all"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="mr-1 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-neon-purple transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden absolute w-full bg-black/90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col items-center space-y-3 px-4">
          <a href="#about" className="w-full text-center py-2 text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>About</a>
          <a href="#skills" className="w-full text-center py-2 text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="w-full text-center py-2 text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Projects</a>
          <a href="#resume" className="w-full text-center py-2 text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Resume</a>
          <a href="#contact" className="w-full text-center py-2 text-white hover:text-neon-purple transition-colors" onClick={toggleMenu}>Contact</a>
          
          <div className="flex items-center space-x-4 py-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-neon-blue transition-colors"
              onClick={toggleMenu}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-neon-blue transition-colors"
              onClick={toggleMenu}
            >
              <Linkedin size={20} />
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white border border-neon-purple hover:bg-neon-purple/20"
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                toggleMenu();
              }}
            >
              <FileText className="mr-1 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
