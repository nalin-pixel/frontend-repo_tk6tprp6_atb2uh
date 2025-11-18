import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <Hero
        onPrimaryClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Services ref={servicesRef} />
      <Projects />
      <Blog />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
