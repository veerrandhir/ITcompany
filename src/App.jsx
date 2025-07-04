// File: src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter

// Import your modular components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
    // AOS.init is removed as it requires specific setup not compatible with single file Canvas execution
    // If you are running this in a local Vite environment, you can re-add AOS setup in main.jsx or a dedicated file.

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-white text-gray-800">
                <Navbar />

                {/* Apply global page layout wrapper here */}
                <main className="flex-grow pt-16"> {/* Added pt-16 to account for fixed navbar */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            {/* Add a route for individual blog posts if needed, e.g., <Route path="/blog/:slug" element={<BlogPost />} /> */}
                        </Routes>
                    </div>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
