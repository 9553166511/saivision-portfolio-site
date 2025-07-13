import { GraduationCap, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const education = [
  {
    institution: "University of Memphis",
    degree: "M.S. in Information Systems",
    date: "Graduated May 4, 2024",
    description: "Advanced coursework in data analytics, information systems design, and predictive modeling"
  },
  {
    institution: "Vignan's Lara Institute of Technology & Science",
    degree: "B.Tech, Electrical & Electronics Engineering",
    date: "2017",
    description: "Strong foundation in analytical thinking and problem-solving methodologies"
  }
];

export const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground">
            From engineering foundations to analytics excellence
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.institution}
                className={`scroll-reveal ${isVisible ? 'revealed' : ''} relative flex items-start space-x-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <GraduationCap size={24} className="text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-8 border border-border card-hover">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                      <Calendar size={16} className="mr-2" />
                      {edu.date}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-medium mb-3">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};