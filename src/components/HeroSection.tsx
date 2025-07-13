import { ChevronDown, Download, Mail } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This will trigger a download - you can replace with actual PDF URL
    const link = document.createElement('a');
    link.href = '/resume-sai-sudheer-neelam.pdf'; // Add actual resume PDF to public folder
    link.download = 'Sai-Sudheer-Neelam-Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Sai Sudheer Neelam
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            M.S. in Information Systems, University of Memphis
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Data Analyst | Data Cleaning | Predictive Modeling
          </p>
        </div>
        
        <div className="animate-fade-up-delay">
          <p className="text-2xl md:text-3xl font-medium text-primary mb-12">
            Turning raw data into clear insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={downloadResume}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <button 
              onClick={scrollToContact}
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};