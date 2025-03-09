import './App.css'
import { useEffect, useState } from 'react'
import Header from './pages/Header'
import Hello from './pages/Hello'
import Footer from './pages/Footer'
import Menu from './pages/Menu'
import MenuIcon from './components/MenuIcon'
import DarkMode from './components/DarkMode'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [open, setOpen] = useState(false)

  return (
    <div id='outter' className={`${darkMode && 'dark'} w-screen h-screen p-4 bg-white dark:bg-black text-black dark:text-slate-400`}>
      <div id='inner' className='size-full flex flex-col justify-between border-1 rounded-lg border-slate-600 bg-slate-950'>
        <header className='px-7 py-4 border-b border-slate-600 rounded-t-lg'>
          <Header>
            <MenuIcon open={open} setOpen={setOpen} />
          </Header>
        </header>
        <main className='relative size-full overflow-hidden'>
          <Menu open={open} />
          <Hello />
          {/* <DarkMode setDarkMode={setDarkMode} /> */}
        </main>
        <footer className='border-t border-slate-600'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
