
import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Feel Good Women Wellness Foundation",
      period: "Sep 2024 — Oct 2024",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      website: "https://feelgoodwellnessfoundation.com/",
      achievements: [
        "Built responsive Laravel site, boosting engagement by 25% and SEO by 40%.",
        "Implemented CMS features with PHP & MySQL, halving content update time.",
        "Optimized performance, cutting load times by 35% and improving retention.",
        "Deployed on Hostinger with 99.9% uptime via efficient cPanel management."
      ]
    }
  ];
  
  return (
    <section id="experience" className="section bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title + exp.company}
              className="glass-card group hover:border-primary/30 transition-all duration-500 overflow-hidden opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="text-sm text-primary font-medium">{exp.period}</div>
                    <a 
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1 mt-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      View Live Site
                    </a>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="text-lg text-gray-300 mt-1">{exp.company}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-2 text-gray-300 opacity-0 animate-fadeIn" 
                        style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                      >
                        <span className="text-primary mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                          </svg>
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Background highlight effect */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
