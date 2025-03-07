import './App.css'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import DarkMode from './DarkMode'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main className={darkMode ? 'dark' : ''}>
      <section>
        <Header />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <DarkMode setDarkMode={setDarkMode}/>
      </section>
    </main>
  )
}

export default App
