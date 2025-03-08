import './App.css'
import Header from './pages/Header'
import Menu from './components/Menu'
import Hello from './pages/Hello'
import DarkMode from './components/DarkMode'
import Footer from './pages/Footer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div id='outter' className={`${darkMode ? 'dark' : ''} w-screen h-screen p-4 bg-white dark:bg-black text-black dark:text-slate-400`}>
      <div id='inner' className='h-full w-full flex flex-col justify-between border-1 rounded-lg border-slate-600'>
        <header className='px-7 py-4 border-b border-slate-600'>
          <Header>
            <Menu />
          </Header>
        </header>
        <main className='w-full h-full'>
          <Hello>
            {/* <DarkMode setDarkMode={setDarkMode} /> */}
          </Hello>
        </main>
        <footer className='border-t border-slate-600'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
