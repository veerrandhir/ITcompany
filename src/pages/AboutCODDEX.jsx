import { FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-6">Who We Are</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        At CODDEX, we're not just developers — we're digital craftsmen. With a passion for clean code and a focus on real business impact.
                    </p>
                </section>

                {/* Our Story */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="mb-4">
                                Founded in 2023, CODDEX began with a simple mission: to help local businesses establish a professional online presence without the technical headaches.
                            </p>
                            <p className="mb-4">
                                What started as a one-person operation has grown into a dedicated team of web specialists passionate about delivering results.
                            </p>
                            <p>
                                We've helped over 50 businesses across India transform their digital presence and achieve their online goals.
                            </p>
                        </div>
                        <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">[Team photo placeholder]</p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50 p-8 rounded-lg">
                            <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2z"/></svg> {/* FaLightbulb */}
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p>
                                To make premium website development accessible to businesses of all sizes — with zero technical hassle.
                            </p>
                        </div>
                        <div className="bg-indigo-50 p-8 rounded-lg">
                            <svg className="text-indigo-600 text-4xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-10h2v-6h-2v6zm0 4h2v2h-2v-2z"/></svg> {/* FaRocket */}
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p>
                                To be India's most trusted development partner for startups and local brands.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6">
                            <svg className="text-indigo-600 text-4xl mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-12h2v6h-2z"/></svg> {/* FaHandshake */}
                            <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                            <p>Your success is our priority. We listen first, then build solutions tailored to your needs.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-indigo-600 text-4xl mx-auto mb-4 font-bold">100%</div>
                            <h3 className="text-xl font-bold mb-2">Transparency</h3>
                            <p>No hidden costs or surprises. Clear communication at every step of the process.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-indigo-600 text-4xl mx-auto mb-4 font-bold">✓</div>
                            <h3 className="text-xl font-bold mb-2">Quality First</h3>
                            <p>We deliver work we're proud of, using best practices and modern technologies.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default About;