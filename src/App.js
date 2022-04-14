import './App.css';

import React, { Component } from 'react';
// import component functions
import NavBar from './sections/Navbar/Navbar'
import Footer from './sections/Footer/Footer'
import MainView from './sections/MainView/MainView'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import AboutMe from './sections/AboutMe/AboutMe'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainView/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

 