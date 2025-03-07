import './App.css'
import Header from './Header'
import Menu from './Menu'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import DarkMode from './DarkMode'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div id='main-wrapper' className={`${darkMode ? 'dark' : ''} w-screen h-screen p-4 bg-white dark:bg-black text-black dark:text-slate-400`}>
      <main className={`w-full h-full border-1 border-slate-700 rounded-lg flex flex-col justify-between`}>
        <section id='header' className='px-7 py-4 border-b border-slate-600'>
          <Header>
            <Menu />
          </Header>
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
          <DarkMode setDarkMode={setDarkMode} />
        </section>
        <section id='footer' className='border-t border-slate-600'>
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default App
