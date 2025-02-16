
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020 - Present",
      title: "B.Tech CSE (AI)",
      place: "Parul University",
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: "Full Stack Development",
      place: "Self-Learning & Projects",
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">About Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            A passionate Full Stack Developer and AI enthusiast, constantly learning
            and building innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-on-scroll">
            <p className="text-foreground/80 leading-relaxed">
              Hello! I'm G RaghuNadhReddy, a Full Stack Developer specializing in
              the MERN stack. Currently pursuing my B.Tech in Computer Science with
              a focus on Artificial Intelligence at Parul University.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm passionate about creating efficient, scalable solutions and have
              expertise in both frontend and backend development. My strong
              foundation in core computer science subjects like OOPS, DBMS,
              Computer Networks, and Operating Systems enables me to build robust
              applications.
            </p>
          </div>

          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">
                      {item.year}
                    </p>
                    <h4 className="font-medium mt-1">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
