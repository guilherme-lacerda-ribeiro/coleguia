import { useState } from "react";
import SectionArrow from "../../../components/SectionArrow";
import Item from "../../../components/Item";
import Bio from "../Bio";

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
          <Item fillColor="fill-rose-400">bio</Item>
          <Item fillColor="fill-teal-400">interests</Item>
          <Item fillColor="fill-indigo-500">education</Item>
        </ul>
      </div>

    </div>
  );
};

export default PersonalInfo;