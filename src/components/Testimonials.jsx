import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "WebWeavers transformed our outdated site into a modern sales machine. Our online inquiries increased by 200%!",
            name: "Rajesh Sharma",
            company: "SpiceDelight Foods"
        },
        {
            quote: "The e-commerce site they built for us is fast, easy to use, and has significantly boosted our sales.",
            name: "Priya Patel",
            company: "UrbanCraft Boutique"
        },
        {
            quote: "Excellent service and support. They understood our needs and delivered beyond expectations.",
            name: "Amit Verma",
            company: "TechSolutions Inc."
        },
        {
            quote: "We needed a fast launch — WebWeavers delivered in just 7 days. Design, SEO, and UX were all on point.",
            name: "Nikita Jain",
            company: "Glow & Go"
        },
        {
            quote: "Their dedication and quality stood out. Our website runs smoothly, looks stunning, and gets real leads.",
            name: "Deepak Thakur",
            company: "CraftMark Homes"
        }
    ];

    return (
        <section className="py-20 bg-indigo-600 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Trusted By Startups & Local Businesses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md shadow hover:shadow-lg transition duration-300"
                        >
                            <svg className="text-indigo-200 text-2xl mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.983 3v7.391c0 5.704-3.736 9.57-8.983 11.609 3.125-4.147 6.029-7.971 6.029-11.609v-7.391h-6.029v7.391c0 4.148-2.663 7.971-6.029 11.609 3.125-4.147 6.029-7.971 6.029-11.609v-7.391h6.029z"/></svg> {/* FaQuoteLeft */}
                            <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                            <div className="border-t border-indigo-400 pt-3">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-indigo-200 text-sm">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
