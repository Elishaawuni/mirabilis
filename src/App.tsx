import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import WhyMirabilis from './components/WhyMirabilis';
import Hardware from './components/Hardware';
import Testimonials from './components/Testimonials';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Industries />
      <Hardware />
      <HowItWorks />
      <WhyMirabilis />
      <Testimonials />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
