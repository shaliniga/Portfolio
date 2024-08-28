import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Resume/>
    <Contact/>
  </React.StrictMode>
);
