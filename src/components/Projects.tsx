
import { useState } from "react";
import { Github, Link as LinkIcon } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description:
        "Real-time chat application with AI-powered features built using the MERN stack.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=800&h=500",
      tags: ["React", "Node.js", "MongoDB", "AI"],
      github: "#",
      live: "#",
      category: "fullstack",
    },
    {
      title: "E-Learning Platform",
      description:
        "A comprehensive e-learning platform with course management and progress tracking.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&h=500",
      tags: ["React", "Express", "MongoDB", "JWT"],
      github: "#",
      live: "#",
      category: "fullstack",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=800&h=500",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      category: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">
            Featured Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 animate-on-scroll">
          {["all", "frontend", "fullstack"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass overflow-hidden rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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

export default Projects;
