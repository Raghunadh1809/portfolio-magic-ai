
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">Get in Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 glass hover:bg-primary/5 transition-colors"
              >
                <Mail className="w-6 h-6 text-primary" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass hover:bg-primary/5 transition-colors"
              >
                <Github className="w-6 h-6 text-primary" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass hover:bg-primary/5 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border bg-background"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border bg-background"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
