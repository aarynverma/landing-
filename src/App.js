import React from 'react';
import Hero from './hero';
import Secb from './sectionb';
import Secc from './sectionc';
import Secd from './sectiond';
import Contact from './contact';
import './App.css';
import Footer from './footer';

function App() {
  return (
    <>
      <Hero />
      <Secb />
      <Secc />
      <Secd />
      <Contact />
      <Footer />
      {/* <button className="sectiond_final_button">Discover all Business</button> */}
    </>
  );
}

export default App;
