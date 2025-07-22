const Testimonials = () => {
  const testimonials = [
    {
      quote: "CODDEX transformed our outdated site into a modern sales machine. Our online inquiries increased by 200%!",
      name: "Rajesh Sharma",
      company: "SpiceDelight Foods",
      date: "June 01, 2025"
    },
    {
      quote: "The e-commerce site they built for us is fast, easy to use, and has significantly boosted our sales.",
      name: "Priya Patel",
      company: "CraftCare Boutique",
      date: "May 25, 2025"
    },
    {
      quote: "Excellent service and support. They understood our needs and delivered beyond expectations.",
      name: "Amit Verma",
      company: "Veda Institute.",
      date: "April 15, 2024"
    },
    {
      quote: "We needed a fast launch — CODDEX delivered in just 7 days. Design, SEO, and UX were all on point.",
      name: "Nikita Jain",
      company: "Glow & Go",
      date: "March 30, 2025"
    },
    {
      quote: "Their dedication and quality stood out. Our website runs smoothly, looks stunning, and gets real leads.",
      name: "Deepak Thakur",
      company: "CraftMark Homes",
      date: "February 20, 2025"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-indigo-700 dark:text-white">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 bg-green-100 text-gray-800`}
            >
              <p className="mb-4 text-lg italic leading-relaxed text-gray-700">
                “{testimonial.quote}”
              </p>
              <div className="border-t border-blue-300 pt-3">
                <p className="font-bold text-indigo-700 text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
