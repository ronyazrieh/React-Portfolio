import { useState } from 'react'

import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Aboutme } from './components/AboutMe/AboutMe'
import { Skills } from './components/Skills/Skills'

function App() {
 

  return (
    <div className={styles.App}> 
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
    </div>
  )
}

export default App
