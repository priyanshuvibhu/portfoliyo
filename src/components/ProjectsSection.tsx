
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "Emotion Detection",
      period: "Sep 2024 — Oct 2024",
      description: "ResNet101-based model achieving 75% accuracy for real-time emotion recognition across seven states. Used PyTorch and OpenCV for video processing and state classification.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      tags: ["PyTorch", "OpenCV", "ResNet101", "Deep Learning"]
    },
    {
      title: "Plant Disease Prediction",
      period: "Mar 2024 — Apr 2024",
      description: "ML model diagnosing 38 plant diseases with 98.99% accuracy on a 90,000-image dataset. Implemented transfer learning with EfficientNet for improved accuracy.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["TensorFlow", "EfficientNet", "Image Classification", "Agriculture Tech"]
    },
    {
      title: "Smart Warehouse System",
      period: "Nov 2023 — Jan 2024",
      description: "IoT-integrated dashboard with Blynk GUI for real-time inventory and environment monitoring. Used ESP32 microcontrollers and various sensors.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["IoT", "ESP32", "Blynk", "Sensors", "Real-time Monitoring"]
    }
  ];
  
  return (
    <section id="projects" className="section bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "glass-card group cursor-pointer transform transition-all duration-300 h-[340px] opacity-0 animate-fadeIn relative",
                activeProject === index ? "scale-[1.02]" : "hover:scale-[1.02]"
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="mt-auto">
                  <div className="text-xs text-primary font-medium mb-1">{project.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  
                  <p 
                    className={cn(
                      "text-gray-300 text-sm transition-all duration-300",
                      activeProject === index ? "line-clamp-none" : "line-clamp-2"
                    )}
                  >
                    {project.description}
                  </p>
                  
                  <div 
                    className={cn(
                      "flex flex-wrap gap-2 mt-3 transition-all duration-300",
                      activeProject === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sparkle effect in corner */}
              <div className="absolute top-4 right-4 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m0 16v1m-8-8h1m15.18-1.083-.83-.83m-14.53-.83L3 12l.83.83m14.5-.83.83.83M6.17 6.17 7 7m9.83 9.83 .83.83"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
