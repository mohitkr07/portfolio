import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-semibold text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-teal-500">Mohitkumar </span>Mahto
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-all duration-300 hover:text-teal-500 px-3 py-2 text-sm font-medium cursor-pointer ${
                    activeSection === link.id ? 'text-teal-500' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center ml-4 space-x-3">
                <a
                  href="https://github.com/mohitkr07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitkumar-mahto-7016311b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/mohit12_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXTwitter} fontSize={18} className='mt-1' />
                </a>
                <button
                  onClick={toggleTheme}
                  className="ml-4 text-gray-500 hover:text-teal-500 transition-colors cursor-pointer"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-teal-500 transition-colors mr-4"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeSection === link.id
                  ? 'text-teal-500'
                  : 'hover:text-teal-500'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-6 pb-4">
          <a
            href="https://github.com/mohitkr07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohitkumar-mahto-7016311b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/mohit12_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-teal-500 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;