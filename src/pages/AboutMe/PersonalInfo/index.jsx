import { useState } from "react";
import SectionArrow from "../../../components/SectionArrow";
import Item from "../../../components/Item";
import Bio from "../Bio";
import Interests from "../Interests";

const PersonalInfo = () => {
  const [sectionOpen, setSectionOpen] = useState(false)
  const handleSectionClick = () => setSectionOpen(prev => !prev)

  return (
    <div id='section-inner' className="flex flex-col gap-3">

      <h4 className="flex flex-row content-center text-slate-50 px-5" onClick={handleSectionClick}>
        <button>
          <SectionArrow sectionOpen={sectionOpen} />
        </button>
        personal-info
      </h4>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${sectionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`} >
        <ul className="bg-slate-950 p-5 flex flex-col gap-4">
          <Item name='bio' fillColor="fill-rose-400">
            <Bio />
          </Item>
          <Item name='interests' fillColor="fill-teal-400">
            <Interests />
          </Item>
          <Item name='education' fillColor="fill-indigo-500"></Item>
        </ul>
      </div>

    </div>
  );
};

export default PersonalInfo;