import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {  
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="text-center">
          {/* <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Mohitkumar
          </p> */}
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by Mohitkumar Mahto
          </p>
        </div>
    </footer>
  );
};

export default Footer;