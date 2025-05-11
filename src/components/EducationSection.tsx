
import React from "react";

const EducationSection = () => {
  const education = [
    {
      school: "Graphic Era University, Dehradun",
      degree: "B.Tech in Computer Science",
      grade: "SGPA: 8.6",
      period: "2020 - 2024",
      description: "Specialized in machine learning and full-stack development with excellent academic performance."
    },
    {
      school: "Jawahar Navodaya Vidyalaya, Dehradun",
      degree: "Class 12 (C.B.S.E.)",
      grade: "94.6%",
      period: "2019 - 2020",
      description: "Focused on Physics, Chemistry, Mathematics with computer science as an elective."
    },
    {
      school: "Jawahar Navodaya Vidyalaya, Dehradun",
      degree: "Class 10 (C.B.S.E.)",
      grade: "96.4%",
      period: "2017 - 2018",
      description: "Achieved outstanding academic excellence with particular strengths in mathematics and science."
    }
  ];
  
  return (
    <section id="education" className="section bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-secondary -ml-0.5" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.school + edu.degree}
                className={`relative opacity-0 animate-fadeIn w-full max-w-full md:max-w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 mt-6" />
                
                {/* Content */}
                <div className={`glass-card ml-10 md:ml-0 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="text-xs text-primary font-semibold mb-1">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mt-1 mb-2">
                    <span className="text-gray-300">{edu.degree}</span>
                    <span className="hidden md:block text-gray-400">•</span>
                    <span className="text-primary">{edu.grade}</span>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
