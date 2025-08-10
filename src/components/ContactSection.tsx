
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div ref={sectionRef} className="max-w-4xl mx-auto hidden-element">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-neon-purple mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:dvarun.mudiraj@gmail.com" className="text-white hover:text-neon-purple transition-colors">
                        dvarun.mudiraj@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-neon-purple mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+918143900854" className="text-white hover:text-neon-purple transition-colors">
                        +91-8888888888
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm text-gray-400 mb-3">Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/dvarunmudiraj" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-purple/20 hover:text-neon-purple transition-all">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/d-varun-url" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-neon-blue/20 hover:text-neon-blue transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Send Me A Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 focus:border-neon-purple"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 focus:border-neon-purple"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-neon-purple"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-neon-purple min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
