
import { useEffect, useRef } from "react";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", proficiency: 90 },
        { name: "HTML & CSS", proficiency: 95 },
        { name: "JavaScript", proficiency: 88 },
        { name: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 88 },
        { name: "MongoDB", proficiency: 90 },
        { name: "RESTful APIs", proficiency: 92 },
      ],
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "Git & GitHub", proficiency: 88 },
        { name: "Problem Solving", proficiency: 85 },
        { name: "Data Structures", proficiency: 87 },
      ],
    },
    {
      title: "Core CS Subjects",
      skills: [
        { name: "OOPS", proficiency: 92 },
        { name: "DBMS", proficiency: 88 },
        { name: "Computer Networks", proficiency: 85 },
        { name: "Operating Systems", proficiency: 86 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const progressBars = entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar) => {
              const width = bar.getAttribute("data-progress");
              if (width) {
                (bar as HTMLElement).style.width = `${width}%`;
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">
            Skills & Technologies
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 gap-12 animate-on-scroll"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="space-y-6 glass p-6"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-primary">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-progress={skill.proficiency}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
