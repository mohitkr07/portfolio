import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';


const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (heading) {
      heading.classList.add('animate-fadeIn');
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 transform translate-y-4"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.2s' }}
          >
            <span className="block">Hello, I&apos;m</span>
            <span className="block mt-2 text-teal-500">Mohitkumar Mahto</span>
            <span className="block mt-2">Software Engineer</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 opacity-0 transform translate-y-4"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.4s' }}
          >
            I build exceptional digital experiences with clean code and thoughtful design.
            Specializing in full-stack development with modern technologies.
          </p>
          
          <div 
            className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 transform translate-y-4"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
            >
              View My Work
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
          
          <div 
            className="hidden lg:flex items-center space-x-6 opacity-0 transform translate-y-4"
            style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.8s' }}
          >
            <a
              href="https://github.com/mohitkr07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohitkumar-mahto-7016311b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/mohit12_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faXTwitter} fontSize={22}/>
            </a>
          </div>
        </div>
        
        <div 
          className="hidden lg:block opacity-0 transform translate-y-4"
          style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}
        >
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Developer"
                className="w-full h-full object-cover mix-blend-overlay"
                fill
    style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-500 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;