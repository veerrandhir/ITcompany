const Services = () => {
  const services = [
    {
      id: 1,
      title: "API Development",
      description: "Custom RESTful & GraphQL APIs with Node.js, Express, and MongoDB.",
      icon: "🔌"
    },
    {
      id: 2,
      title: "Backend Optimization",
      description: "Improve database queries, caching, and server performance.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Cloud Deployment",
      description: "AWS, Google Cloud, or Azure setup for scalable applications.",
      icon: "☁️"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Freelancing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;