import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="relative group">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden bg-card border-4 border-border transition-all duration-500 group-hover:border-primary">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Sai Sudheer Neelam"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className={`scroll-reveal ${isVisible ? 'revealed' : ''} space-y-6`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                I'm a graduate of University of Memphis (May 4, 2024), specializing in transforming 
                messy data into structured insights through predictive modeling, statistical methods, 
                and clean pipelines.
              </p>
              
              <p>
                Driven by curiosity, powered by data. My passion lies in uncovering hidden patterns 
                and trends that drive meaningful business decisions. From data cleaning to advanced 
                analytics, I bridge the gap between raw information and actionable intelligence.
              </p>
              
              <p>
                With a strong foundation in both technical skills and strategic thinking, I bring 
                a unique perspective to every project—ensuring data integrity while delivering 
                insights that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};