
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Import particles.js dynamically to avoid SSR issues
    const loadParticles = async () => {
      try {
        // @ts-ignore - Using window directly for particles
        const Particles = (window.particlesJS = await import('particles.js'));
        
        if (particlesRef.current) {
          // @ts-ignore - Window object for particles
          window.particlesJS("particles-js", {
            particles: {
              number: { value: isMobile ? 30 : 80, density: { enable: true, value_area: 800 } },
              color: { value: "#9b5de5" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#4a306d",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 },
              }
            },
            retina_detect: true
          });
        }
      } catch (error) {
        console.error("Failed to load particles:", error);
      }
    };
    
    loadParticles();
  }, [isMobile]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <div id="particles-js" ref={particlesRef} className="absolute inset-0 -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-xl md:text-2xl text-gray-400 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </h3>
          
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
              <span>Priyanshu </span>
              <span className="text-primary">Sharma</span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-shimmer bg-[length:200%_100%]"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
            <span className="typing-effect overflow-hidden whitespace-nowrap border-r-4 border-primary pr-1 animate-typing">
              CSE undergraduate | Full-Stack Developer | ML Enthusiast
            </span>
          </h2>
          
          <div className="flex gap-4 mt-2 mb-8 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '1s' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fadeIn opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="relative">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
              <img 
                src="/images/hero.jpg" 
                alt="Priyanshu Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="rounded-full w-10 h-10 bg-secondary flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
