import './App.css';
import React, { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'; 
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => { 
    fetch("http://localhost:3001/contact")
    .then((res) => res.json())
    .then((data) => { console.log(data)})
  }, [])

  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
