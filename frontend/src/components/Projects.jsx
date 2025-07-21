const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce API",
      description: "A RESTful API for an e-commerce platform with JWT authentication.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description: "WebSocket-based chat application with rooms and private messaging.",
      tech: ["Node.js", "Socket.io", "React"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                    GitHub
                  </a>
                  <a href={project.demo} className="flex-1 text-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Live Demo
                  </a>
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