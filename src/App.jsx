// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import Services from './pages/Service';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar';
import TechStackSection from './pages/Teck';
import ExperienceSection from './pages/Experience';
import Footer from './pages/Footer';
import AboutMe from './pages/components/About/AboutDetails';
import WebDetails from './pages/components/WebDetails/Web';
import SoftwareAIShowcase from './pages/components/Software/Software';

function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><AboutSection /></section>
        <section id="services"><Services /></section>
        <section id="tech"><TechStackSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="exp"><ExperienceSection /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/web" element={<WebDetails />} />
      <Route path="/software" element={<SoftwareAIShowcase />} />
    </Routes>
  );
}

export default App;
