import Hero from '../components/Hero';
import About from '../components/About';
import Metrics from '../components/Metrics';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Education from '../components/Education';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <About />
      <Metrics />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
