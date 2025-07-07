// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Add this import for the Link component
// Import SocialIcon and FooterLinkGroup from the HelperComponents file
import { SocialIcon, FooterLinkGroup } from './HelperComponents'; // Assuming HelperComponents is in the same directory

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">WebWeavers</h3>
                        <p className="mb-4">Crafting Code. Creating Success.</p>
                        <p>Making premium web development accessible to businesses of all sizes.</p>
                    </div>

                    {/* Services Column */}
                          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/static-websites" className="hover:text-indigo-400">Static Websites</Link></li>
              <li><Link to="/services/ecommerce-solutions" className="hover:text-indigo-400">E-commerce Solutions</Link></li>
              <li><Link to="/services/custom-web-apps" className="hover:text-indigo-400">Custom Web Apps</Link></li>
              <li><Link to="/services/hosting-domain" className="hover:text-indigo-400">Hosting & Domain</Link></li>
              <li><Link to="/services/seo-optimization" className="hover:text-indigo-400">SEO Optimization</Link></li>
            </ul>
          </div>


                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <address className="not-italic">
                            <p className="mb-2">123 Business Street</p>
                            <p className="mb-2">Mumbai, India 400001</p>
                            <p className="mb-2">Email: contact@webweavers.com</p>
                            <p>Phone: +91 87890 77454</p>
                        </address>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {/* SocialIcon is a helper component, so it needs to be imported */}
                            <SocialIcon platform="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.81c-3.235 0-4.19 1.504-4.19 4.033v2.967z"/></svg>
                            </SocialIcon>
                            <SocialIcon platform="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.417 0-6.184 2.766-6.184 6.183 0 .484.055.955.158 1.406-5.14-.259-9.693-2.729-12.742-6.495-.533.917-.84 1.97-.84 3.224 0 2.144 1.09 4.02 2.748 5.127-.807-.026-1.566-.247-2.228-.616v.081c0 2.986 2.127 5.474 4.938 6.046-.41.111-.843.17-1.287.17-.316 0-.626-.031-.928-.086.784 2.443 3.056 4.223 5.76 4.273-2.094 1.64-4.757 2.62-7.662 2.62-.495 0-.98-.029-1.457-.085 2.71 1.745 5.93 2.768 9.39 2.768 11.292 0 17.464-9.354 17.464-17.464 0-.267-.008-.53-.02-.795.81-.587 1.516-1.32 2.078-2.164z"/></svg>
                            </SocialIcon>
                            <SocialIcon platform="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </SocialIcon>
                            <SocialIcon platform="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.254-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.668.014-4.949.072-4.354.2-6.78 2.618-6.989 6.989-.059 1.281-.073 1.691-.073 4.949s.014 3.668.072 4.949c.2 4.354 2.618 6.78 6.989 6.989 1.281.058 1.691.073 4.949.073s3.668-.014 4.949-.072c4.354-.2 6.78-2.618 6.989-6.989.059-1.281.073-1.691.073-4.949s-.014-3.668-.072-4.949c-.2-4.354-2.618-6.78-6.989-6.989-1.281-.059-1.691-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} WebWeavers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
