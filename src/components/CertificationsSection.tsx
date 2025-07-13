import { Award, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Placeholder certifications - can be updated when actual certifications are provided
const certifications = [
  {
    title: "Google Data Analytics Certificate",
    issuer: "Coursera",
    description: "Comprehensive training in data analysis, visualization, and statistical methods",
    skills: ["Data Analysis", "Tableau", "SQL", "R Programming"]
  },
  {
    title: "Microsoft Excel Expert",
    issuer: "Microsoft",
    description: "Advanced Excel skills for data manipulation and analysis",
    skills: ["Advanced Excel", "Data Modeling", "Pivot Tables", "Macros"]
  },
  {
    title: "Python for Data Science",
    issuer: "Udemy",
    description: "Machine learning and data science with Python programming",
    skills: ["Python", "Pandas", "Machine Learning", "Data Visualization"]
  },
  {
    title: "Statistical Analysis Fundamentals",
    issuer: "University of Memphis",
    description: "Core statistical methods for data analysis and interpretation",
    skills: ["Statistics", "Hypothesis Testing", "Regression Analysis", "R"]
  }
];

export const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''} bg-card rounded-xl p-6 border border-border card-hover group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-subtle rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                
                <button className="p-2 rounded-lg border border-border hover:bg-background transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink size={16} className="text-muted-foreground" />
                </button>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-accent-subtle text-accent-foreground rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};