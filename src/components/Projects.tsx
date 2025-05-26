import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team workspaces.',
      image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Fitness Tracking API',
      description: 'A RESTful API for fitness tracking applications with user authentication and data analytics.',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'backend'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current and forecasted weather data from multiple sources.',
      image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Chart.js', 'API Integration', 'Geolocation'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A dashboard for analyzing social media performance across multiple platforms with custom reporting.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Python', 'Django', 'D3.js'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Inventory Management System',
      description: 'A comprehensive inventory management system with barcode scanning and supplier management.',
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
      category: 'mobile'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is built with care and attention to detail.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'all'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'frontend'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'backend'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'fullstack'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                filter === 'mobile'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              Mobile
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="mt-2 flex items-center text-teal-500 hover:text-teal-600 transition-colors"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/mohitkr07" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors duration-300"
          >
            <Code size={18} className="mr-2" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;