
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background/95 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Priyanshu Sharma. Designed with passion.
            </p>
          </div>
          
          <div className="flex items-center">
            <a href="#home" className="px-3 py-2 text-sm text-gray-400 hover:text-primary transition-colors">
              Back to Top
            </a>
            <span className="w-px h-4 bg-gray-700 mx-2"></span>
            <a href="#" className="px-3 py-2 text-sm text-gray-400 hover:text-primary transition-colors">
              Privacy
            </a>
            <span className="w-px h-4 bg-gray-700 mx-2"></span>
            <a href="#" className="px-3 py-2 text-sm text-gray-400 hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
