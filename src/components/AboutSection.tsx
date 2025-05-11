
import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

const AboutSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript & Laravel", level: 85 },
    { name: "Python & PyTorch", level: 80 },
    { name: "MySQL & MongoDB", level: 75 },
    { name: "DSA & Algorithms", level: 82 }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll(".skill-progress-fill");
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.transform = `scaleX(${skills[index].level / 100})`;
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skills]);
  
  return (
    <section id="about" className="section bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              I'm a passionate B.Tech CSE student who builds web apps and ML models to solve real-world problems. 
              I believe in creating elegant, efficient solutions that make a positive impact.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              My journey in tech has led me to explore various JavaScript frameworks, Laravel for robust backend systems, 
              and PyTorch for cutting-edge machine learning applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed opacity-0 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              I'm constantly learning and adapting to new technologies, with a focus on creating 
              scalable solutions that address real user needs.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6 opacity-0 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
              <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm">Web Development</span>
              <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm">Machine Learning</span>
              <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm">Full-Stack Development</span>
              <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm">Database Design</span>
              <span className="px-4 py-2 rounded-full bg-secondary/50 text-sm">Problem Solving</span>
            </div>
          </div>
          
          <div ref={skillsRef} className="glass-card">
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill bg-gradient-to-r from-primary/80 to-primary"
                      style={{ transform: "scaleX(0)", transition: "transform 1s ease-in-out" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
