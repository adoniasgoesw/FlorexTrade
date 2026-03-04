import CtaSection from '../sections/CtaSection'
import Features from '../sections/Features'
import HeroSection from '../sections/HeroSection'
import LogoCarousel from '../sections/LogoCarousel'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import Footer from '../components/Footer'
export default function HomePage() {
    return (
        <div>
                <HeroSection />
                <LogoCarousel />
                <Features />
                <Pricing />
                <Testimonials />
                <CtaSection />
                <Footer />
        </div>
    )
}