import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
