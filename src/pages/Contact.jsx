import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmissionMessage('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setTimeout(() => setSubmissionMessage(''), 5000); // Clear message after 5 seconds
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block mb-2 font-medium">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                                onClick={() => console.log('Send Message button clicked')}
                            >
                                Send Message
                            </button>
                            {submissionMessage && (
                                <p className="mt-4 text-green-600 text-center">{submissionMessage}</p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <svg className="text-indigo-600 text-xl" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg> {/* FaMapMarkerAlt */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Office</h3>
                                    <p>123 Business Street, Mumbai, India 400001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <svg className="text-indigo-600 text-xl" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.47.57 3.57.11.35.02.75-.24 1.02l-2.2 2.2z"/></svg> {/* FaPhone */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p>+91 87890 77454</p>
                                    <p>Mon-Fri: 9am-6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <svg className="text-indigo-600 text-xl" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> {/* FaEnvelope */}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p>contact@webweavers.com</p>
                                    <p>Support: support@webweavers.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Schedule a Call</h3>
                            <p className="mb-4">Prefer to talk directly? Schedule a 30-minute consultation call at your convenience.</p>
                            <a
                                href="#"
                                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                                onClick={() => console.log('Book a Call button clicked')}
                            >
                                Book a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;