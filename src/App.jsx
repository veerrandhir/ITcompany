import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy-loaded service pages
const StaticWebsites = lazy(() => import('./pages/services/StaticWebsites'));
const EcommerceSolutions = lazy(() => import('./pages/services/EcommerceSolutions'));
const CustomWebApps = lazy(() => import('./pages/services/CustomWebApps'));
const HostingDomain = lazy(() => import('./pages/services/HostingDomain'));
const SeoOptimization = lazy(() => import('./pages/services/SeoOptimization'));

// Lazy-loaded layout components
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const ServicesLayout = lazy(() => import('./components/ServicesLayout'));

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          
          <main className="flex-grow pt-16"> {/* pt-16 for navbar height */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />

                {/* Services Nested Routes */}
                <Route path="/services" element={<ServicesLayout />}>
                  <Route index element={<Services />} />
                  <Route path="static-websites" element={<StaticWebsites />} />
                  <Route path="ecommerce-solutions" element={<EcommerceSolutions />} />
                  <Route path="custom-web-apps" element={<CustomWebApps />} />
                  <Route path="hosting-domain" element={<HostingDomain />} />
                  <Route path="seo-optimization" element={<SeoOptimization />} />
                </Route>

                {/* 404 Catch-all Route */}
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