import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Qualifications />
      <Projects />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
