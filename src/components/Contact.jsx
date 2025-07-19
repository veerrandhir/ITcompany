const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[var(--section-bg)] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-color)]">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-[var(--text-color)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                    border-[var(--text-color)] bg-[var(--card-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-[var(--text-color)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                    border-[var(--text-color)] bg-[var(--card-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-[var(--text-color)]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                  border-[var(--text-color)] bg-[var(--card-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-[var(--text-color)]">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                  border-[var(--text-color)] bg-[var(--card-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--button-bg)] text-[var(--button-text)] py-3 rounded-lg font-bold hover:bg-[var(--button-hover-bg)] transition-colors duration-300"
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
