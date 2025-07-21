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
        console.log('Form submitted:', formData);
        setSubmissionMessage('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setTimeout(() => setSubmissionMessage(''), 5000);
    };

    return (
        <div className="py-12 bg-[var(--section-bg)] transition-colors duration-500">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center text-[var(--text-color)] transition-colors duration-500">
                    Get In Touch
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[var(--card-bg)] p-8 rounded-lg shadow-md transition-colors duration-500">
                        <h2 className="text-2xl font-bold mb-6 text-[var(--text-color)]">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {['name', 'email', 'phone'].map((field, idx) => (
                                <div key={idx}>
                                    <label htmlFor={field} className="block mb-2 font-medium text-[var(--text-color)]">
                                        {field === 'phone' ? 'Phone (Optional)' : field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                                            border-[var(--text-color)] bg-[var(--input-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
                                        required={field !== 'phone'}
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-[var(--text-color)]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300
                                        border-[var(--text-color)] bg-[var(--input-bg)] text-[var(--text-color)] focus:ring-[var(--button-bg)]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-[var(--button-text)] font-bold py-3 px-4 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                            {submissionMessage && (
                                <p className="mt-4 text-green-600 text-center">{submissionMessage}</p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 text-[var(--text-color)]">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        {[{
                            icon: <FaMapMarkerAlt className="text-[var(--button-bg)] text-2xl" />,
                            title: "Our Office",
                            details: "123 Business Street, Mumbai, India 400001"
                        }, {
                            icon: <FaPhone className="text-[var(--button-bg)] text-2xl" />,
                            title: "Phone",
                            details: "+91 87890 77454\nMon-Fri: 9am-6pm"
                        }, {
                            icon: <FaEnvelope className="text-[var(--button-bg)] text-2xl" />,
                            title: "Email",
                            details: "contact@CODDEX.com\nSupport: support@CODDEX.com"
                        }].map((info, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-[var(--button-bg-light)]">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                                    <p className="whitespace-pre-line">{info.details}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8">
                            <h3 className="font-bold text-lg mb-4">Schedule a Call</h3>
                            <p className="mb-4">Prefer to talk directly? Schedule a 30-minute consultation call at your convenience.</p>
                            <a
                                href="#"
                                className="inline-block bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-[var(--button-text)] font-bold py-2 px-6 rounded-lg transition duration-300"
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
