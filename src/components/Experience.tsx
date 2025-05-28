import React from 'react';
import { Briefcase, BookOpen, Award } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  type: 'work' | 'education' | 'award';
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 2,
      title: 'Software Developer',
      location: 'Decision Point',
      date: 'July 2024 - Present',
      description: 'Developed responsive web applications, worked closely with designers to implement pixel-perfect UIs, and optimized performance across multiple browsers.',
      type: 'work'
    },
    {
      id: 3,
      title: 'Mobile Application Developer',
      location: 'Poulima Infotech',
      date: 'Nov 2023 - Feb 2024',
      description: 'Developed and maintained mobile applications, implemented new features, and participated in code reviews to enhance code quality and ensure best practices.',
      type: 'work'
    },
    // {
    //   id: 4,
    //   title: 'Master\'s in Computer Science',
    //   location: 'Tech University',
    //   date: '2015 - 2017',
    //   description: 'Specialized in Human-Computer Interaction and Web Technologies. Thesis on improving user experience in single-page applications.',
    //   type: 'education'
    // },
    {
      id: 5,
      title: 'Indian Institute of Information Technology, Kota',
      location: 'Bachelor of Technology in Electronics & Communication Engineering (ECE)',
      date: '2020 - 2024',
      description: 'Graduated with honors. Coursework included data structures, algorithms, software design patterns, and web development.',
      type: 'education'
    },
    // {
    //   id: 6,
    //   title: 'Innovation Award',
    //   location: 'Web Development Conference',
    //   date: '2022',
    //   description: 'Recognized for developing an open-source library that simplifies accessibility implementation in web applications.',
    //   type: 'award'
    // }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <BookOpen className="w-5 h-5" />;
      case 'award':
        return <Award className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getIconBgColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-purple-500';
      case 'award':
        return 'bg-yellow-500';
      default:
        return 'bg-teal-500';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`mb-10 ml-6 ${
                    index % 2 === 0 ? 'transform translate-y-0' : 'transform translate-y-0'
                  }`}
                >
                  <div className={`absolute w-10 h-10 ${getIconBgColor(item.type)} rounded-full flex items-center justify-center -left-5 ring-8 ring-white dark:ring-gray-900`}>
                    {getIcon(item.type)}
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-gray-600 dark:text-gray-400 mb-4">{item.location}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1jpUMOjkx1GCgUqZj2ZPF_b6Hm_chQ7zp/view?usp=drive_link', '_blank')}
            className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;