
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium animate-fade-in">
                Hello, I'm
              </p>
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up"
              >
                G RaghuNadhReddy
              </h1>
              <p className="text-xl text-foreground/80 animate-slide-up" style={{ animationDelay: "200ms" }}>
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            <p className="text-foreground/70 max-w-lg animate-fade-in" style={{ animationDelay: "400ms" }}>
              Building intelligent solutions with code. Passionate about creating
              innovative web applications and exploring the frontiers of AI.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-full bg-primary/10 backdrop-blur-3xl absolute -top-4 -right-4 w-72 h-72 animate-pulse" />
            <div className="relative z-10">
              {/* Placeholder for profile image */}
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=800"
                  alt="G RaghuNadhReddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
