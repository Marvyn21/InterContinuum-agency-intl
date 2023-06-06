import React from "react";
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Team />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
