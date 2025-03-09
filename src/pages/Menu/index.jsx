import { Link } from 'react-router-dom';
import DarkMode from '../../components/DarkMode'

const Menu = ({ open, setOpen, setDarkMode }) => {
  const handleLinkClick = () => setOpen(false)
  return (
    <nav className={`absolute inset-0 bg-slate-950 
      transition-all duration-300 ease-out transform
      ${open ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-50 scale-95'}
      flex flex-col
      `}>

      <h3 className="pt-7 px-7 pb-4 border-b border-slate-600">
        {'# navigate:'}
      </h3>

      <ul className="pt-4 flex flex-col gap-4">
        <li className="px-7 pb-4 border-b border-slate-600 text-slate-200">
          <Link onClick={handleLinkClick} to="/">_hello</Link>
        </li>
        <li className="px-7 pb-4 border-b border-slate-600 text-slate-200">
          <Link onClick={handleLinkClick} to="/about">_about-me</Link>
        </li>
        <li className="px-7 pb-4 border-b border-slate-600 text-slate-200">
          <Link onClick={handleLinkClick} to="/projects">_projects</Link>
        </li>
        <li className="px-7 pb-4 border-b border-slate-600 text-slate-200">
          <Link onClick={handleLinkClick} to="/contact">_contact-me</Link>
        </li>
        <li className="px-7 pb-4 border-b border-slate-600 text-slate-200">
          {/* <DarkMode setDarkMode={setDarkMode} /> */}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;