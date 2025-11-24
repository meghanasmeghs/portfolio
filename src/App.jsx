import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Internships from './Internships';
import Certificates from './Certificates';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Certificates />
        <Contact />
      </div>
    </>
  );
}


export default App
