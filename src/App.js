import Navbar from './components/NavBar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Education from './components/Education/education';
import Skills from './components/Skills/skills';
import CaseStudies from './components/CaseStudies/caseStudies';
import Achievements from './components/Achievements/achievements';
import Certificate from './components/Certificate/certificate';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <CaseStudies />
      <Achievements />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
