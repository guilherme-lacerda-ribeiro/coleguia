import { useState } from 'react'
import './DarkMode.css'

const DarkMode = ({setDarkMode}) => {
  const [icon, setIcon] = useState('🌑')
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    setIcon(() => icon ===  '🌑' ? '☀️' : '🌑')
  }

  return (
    <button onClick={toggleDarkMode}>
      {icon}
    </button>
  )
}
export default DarkMode