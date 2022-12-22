import React from 'react';
import Admin from './components/admin';
import About from './components/about';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Admin />
      <Contact />
      <About />
      <Footer />
    </div>
   
  );
}

export default App;
