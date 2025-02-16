
const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=400&h=300",
    },
    {
      title: "Java Programming Masterclass",
      issuer: "Coursera",
      date: "2023",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=400&h=300",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      date: "2022",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=400&h=300",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold animate-on-scroll">
            Certifications
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-foreground/70 text-sm">{cert.issuer}</p>
              <p className="text-primary text-sm mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
