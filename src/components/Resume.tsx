
import { FileText, Download, Eye } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Replace with actual resume file URL
    const resumeUrl = "/path-to-your-resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleView = () => {
    // Replace with actual resume view URL
    const viewUrl = "/path-to-your-resume.pdf";
    window.open(viewUrl, "_blank");
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">Resume</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Download my resume or view it online
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 animate-on-scroll">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          
          <button
            onClick={handleView}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
          >
            <Eye className="w-5 h-5" />
            View Online
          </button>
        </div>

        <div className="mt-12 p-8 glass animate-on-scroll">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Quick Overview</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Education</h4>
              <p className="text-foreground/70">
                B.Tech CSE (AI) - Parul University
                <br />
                2020 - Present
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-primary">Experience</h4>
              <p className="text-foreground/70">
                Full Stack Development
                <br />
                Personal Projects & Freelance Work
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-primary">Core Skills</h4>
              <p className="text-foreground/70">
                MERN Stack, Java, AI/ML
                <br />
                OOPS, DBMS, CN, OS
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-primary">Languages</h4>
              <p className="text-foreground/70">
                JavaScript, TypeScript, Java
                <br />
                Python, SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
