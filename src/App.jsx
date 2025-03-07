import './App.css'
import Header from './pages/Header'
import Menu from './components/Menu'
import DarkMode from './components/DarkMode'
import Footer from './pages/Footer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div id='main-wrapper' className={`${darkMode ? 'dark' : ''} w-screen h-screen p-4 bg-white dark:bg-black text-black dark:text-slate-400`}>
      <header className='px-7 py-4 border-b border-slate-600'>
        <Header>
          <Menu />
        </Header>
      </header>
      <main>
        <section>
          <DarkMode setDarkMode={setDarkMode} />
        </section>
      </main>
      <footer className='border-t border-slate-600'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
