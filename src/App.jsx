import { useState } from 'react'

import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Aboutme } from './components/AboutMe/AboutMe'
import { Skills } from './components/Skills/Skills'
import { ProjectPage } from './components/ProjectPage/ProjectPage'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Aboutme />
        <Skills />
        <ProjectPage />
        <Footer />
      </div>
    </Router>
  )
}

export default App
