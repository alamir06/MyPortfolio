
import Home from './pages/Home';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import Services from './pages/Service';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar';
import TechStackSection from './pages/Teck';
import ExperienceSection from './pages/Experience';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><AboutSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="services"><Services /></section>
         <section id="contact"><TechStackSection /></section>
         <section id="contact"><ExperienceSection /></section>
        <section id="contact"><Contact /></section>
         <section id="contact"><Footer /></section>
      </main>
    </>
  );
}

export default App;
