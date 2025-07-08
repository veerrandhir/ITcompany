const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-31539-large.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Profile" 
          className="w-32 h-32 rounded-full border-4 border-green-500 mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm <span className="text-green-500">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Backend Engineer | Node.js Specialist | Freelancer
        </p>
        <div className="flex space-x-4">
          <a 
            href="#hire-me" 
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
          >
            Hire Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg font-bold hover:bg-green-500 hover:text-white transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;