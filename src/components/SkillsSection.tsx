import { Database, TrendingUp, BarChart3, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    icon: Database,
    title: "Data Cleaning & Wrangling",
    description: "Ensuring data integrity from the ground up."
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling & ML",
    description: "Forecasting outcomes with algorithms."
  },
  {
    icon: BarChart3,
    title: "Statistical Analysis & BI",
    description: "Storytelling through numbers."
  },
  {
    icon: Target,
    title: "Strategic Project Management",
    description: "Bridging insights to action."
  }
];

export const SkillsSection = () => {
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
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise in transforming complex data challenges into strategic opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''} card-hover bg-background rounded-xl p-8 border border-border group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-accent-subtle rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} text-center space-y-8`}>
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
            <div className="space-y-4">
              <div>
                <span className="font-medium">Languages:</span>
                <span className="text-muted-foreground ml-2">C • Python • R</span>
              </div>
              <div>
                <span className="font-medium">Tools:</span>
                <span className="text-muted-foreground ml-2">Excel • Tableau • Google Analytics • SQL</span>
              </div>
              <div>
                <span className="font-medium">Methods:</span>
                <span className="text-muted-foreground ml-2">Statistical Methods • Data Modeling Techniques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};