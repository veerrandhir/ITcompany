// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Who I Am</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Profile" 
              className="w-64 h-64 rounded-full border-4 border-green-500 shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate backend developer with 5+ years of experience in building scalable 
              applications using Node.js, Express, MongoDB, and AWS. I specialize in API development, 
              database optimization, and cloud infrastructure.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, I write technical blogs and contribute to open-source projects. 
              I also mentor junior developers and speak at tech meetups.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Node.js</span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Express</span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">MongoDB</span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;