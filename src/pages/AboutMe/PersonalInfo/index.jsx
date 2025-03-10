import { useState } from "react";
import SectionArrow from "../../../components/SectionArrow";
import Item from "../../../components/Item";
import Bio from "../Bio";
import Interests from "../Interests";
import Education from "../Education";

const PersonalInfo = () => {
  const [sectionOpen, setSectionOpen] = useState(false)
  const handleSectionClick = () => setSectionOpen(prev => !prev)

  const [activeItem, setActiveItem] = useState('')
  const toggleActiveItem = (itemName) => {
    console.log('click')
    setActiveItem(activeItem === itemName ? '' : itemName)
  }

  return (
    <div id='section-inner' className="flex flex-col gap-3">

      <h4 className="flex flex-row content-center text-slate-50 px-5" onClick={handleSectionClick}>
        <button>
          <SectionArrow sectionOpen={sectionOpen} />
        </button>
        personal-info
      </h4>

      <div className={`transition-all duration-300 ease-in-out overflow-auto ${sectionOpen ? "max-h-[min(65vh,600px)] opacity-100" : "max-h-0 opacity-0"}`} >
        <ul className="bg-slate-950 p-5 flex flex-col gap-4">
          <Item className='flex flex-col gap-3' name='bio' fillColor="fill-rose-400" hideContent={activeItem !== 'bio'} handleHideContent={() => toggleActiveItem('bio')}>
            <Bio />
          </Item>
          <Item className='flex flex-col gap-3' name='interests' fillColor="fill-teal-400" hideContent={activeItem !== 'interests'} handleHideContent={() => toggleActiveItem('interests')}>
            <Interests />
          </Item>
          <Item className='flex flex-col gap-3' name='education' fillColor="fill-indigo-500" hideContent={activeItem !== 'education'} handleHideContent={() => toggleActiveItem('education')}>
            <Education />
          </Item>
        </ul>
      </div>

    </div>
  );
};

export default PersonalInfo;