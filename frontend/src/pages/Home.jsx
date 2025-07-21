import Hero from '../components/Hero';
import Services from '../components/ServicesHomePage';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Pricing from "../components/Pricing";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services /> {/* This is the adapted Services component from user's Service.jsx */}
            <Testimonials />
            <CTA />
            <Pricing />
        </div>
    );
};

export default Home;