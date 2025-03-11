import './App.css'
import { useState } from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Menu from './pages/Menu'
import MenuIcon from './components/MenuIcon'
import AppRoutes from './routes'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [open, setOpen] = useState(false)

  return (
    <div id='outer' className={`${darkMode && 'dark'} w-screen h-fit min-h-screen p-4 bg-white dark:bg-black text-black dark:text-slate-400`}>
      <div id='inner' className='min-h-[calc(100vh-2rem)] size-full flex flex-col justify-between border-1 rounded-lg border-slate-600 bg-slate-950'>
        <header className='px-7 py-4 border-b border-slate-600 rounded-t-lg'>
          <Header>
            <MenuIcon open={open} setOpen={setOpen} />
          </Header>
        </header>
        <main className='relative size-full flex-1 overflow-hidden'>
          <Menu open={open} setOpen={setOpen} setDarkMode={setDarkMode}/>
          <AppRoutes />
        </main>
        <footer className='border-t border-slate-600'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
