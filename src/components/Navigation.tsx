
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update nav background opacity based on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Detect which section is in view
      const sections = ["home", "about", "education", "experience", "projects", "contact"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact", isButton: true }
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-3 backdrop-blur-md bg-background/80 shadow-md" : "py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold text-white relative group"
        >
          <span className="inline-block transition-transform group-hover:-translate-y-1">
            Priyanshu
          </span>
          <span className="text-primary inline-block ml-1 transition-transform group-hover:-translate-y-1 delay-75">
            Sharma
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "transition-all duration-300 relative hover:text-primary",
                    link.isButton 
                      ? "btn btn-primary ml-2" 
                      : "text-sm font-medium",
                    activeSection === link.id && !link.isButton 
                      ? "text-primary" 
                      : "text-gray-300"
                  )}
                >
                  {link.label}
                  {!link.isButton && activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-gray-800 animate-fadeIn">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={cn(
                      "block py-2 px-4 transition-all",
                      link.isButton 
                        ? "bg-primary text-white rounded-md text-center mt-2" 
                        : "",
                      activeSection === link.id && !link.isButton 
                        ? "text-primary border-l-2 border-primary pl-3" 
                        : "text-gray-300"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
