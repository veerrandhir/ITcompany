import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/AboutCODDEX";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects";
import Services from "./components/ServicesHomePage";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--body-bg)] text-[var(--text-color)] transition-colors duration-500">
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
