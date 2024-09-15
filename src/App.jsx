import { useState } from 'react'

import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Aboutme } from './components/AboutMe/AboutMe'
import { Skills } from './components/Skills/Skills'
import { ProjectPage } from './components/ProjectPage/ProjectPage'
import { Footer } from './components/Footer/Footer'

function App() {
 

  return (
    <div className={styles.App}> 
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <ProjectPage />
      <Footer />
    </div>
  )
}

export default App
