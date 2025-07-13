import { Heart, TrendingUp, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Heart Disease Prediction",
    year: "2023",
    description: "Developed a logistic regression model to predict heart disease risk with comprehensive data analysis and visualization.",
    highlights: [
      "Led data cleaning in Excel with focus on handling class imbalance",
      "Implemented feature selection techniques for optimal model performance",
      "Created interactive Tableau visualizations analyzing smoking, age, BMI, and activity patterns",
      "Selected final model based on rigorous accuracy metrics evaluation"
    ],
    tags: ["Python", "Excel", "Tableau", "Machine Learning", "Logistic Regression"],
    icon: Heart,
    color: "text-red-500"
  },
  {
    title: "Peer-to-Peer Loan Analytics",
    year: "2024",
    description: "Built comprehensive risk assessment system for P2P lending platform using advanced machine learning techniques.",
    highlights: [
      "Cleaned and preprocessed large-scale loan data using Excel and Python",
      "Applied sophisticated imputation techniques for missing data handling",
      "Conducted extensive EDA to identify key borrower risk features",
      "Developed Gradient Boosting model with optimized precision/recall metrics",
      "Delivered actionable risk insights and strategic lending recommendations"
    ],
    tags: ["Python", "Excel", "Gradient Boosting", "Risk Analysis", "EDA"],
    icon: TrendingUp,
    color: "text-green-500"
  }
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications of data science and machine learning
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''} bg-background rounded-xl border border-border overflow-hidden card-hover group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-accent-subtle rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300`}>
                      <project.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg border border-border hover:bg-card transition-colors">
                      <ExternalLink size={20} className="text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:bg-card transition-colors">
                      <Github size={20} className="text-muted-foreground" />
                    </button>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent-subtle text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};