import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutCODDEX'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const StaticWebsites = lazy(() => import('./pages/services/StaticWebsites'));
const EcommerceSolutions = lazy(() => import('./pages/services/EcommerceSolutions'));
const CustomWebApps = lazy(() => import('./pages/services/CustomWebApps'));
const HostingDomain = lazy(() => import('./pages/services/HostingDomain'));
const SeoOptimization = lazy(() => import('./pages/services/SeoOptimization'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const ServicesLayout = lazy(() => import('./components/ServicesLayout'));
const Header = lazy(() => import('./components/Header'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loading spinner during lazy load
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-window z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode by adding/removing "dark" class on html
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-500">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="flex-grow pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<><Header /><Home /></>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<ServicesLayout />}>
                  <Route index element={<Services />} />
                  <Route path="static-websites" element={<StaticWebsites />} />
                  <Route path="ecommerce-solutions" element={<EcommerceSolutions />} />
                  <Route path="custom-web-apps" element={<CustomWebApps />} />
                  <Route path="hosting-domain" element={<HostingDomain />} />
                  <Route path="seo-optimization" element={<SeoOptimization />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
