import { useState } from "react";
import SectionArrow from "../SectionArrow";


const ItemContainer = ({title, children}) => {
  const [sectionOpen, setSectionOpen] = useState(false)
  const handleSectionClick = () => setSectionOpen(prev => !prev)

  return (
    <div id='section-inner' className="flex flex-col gap-3">

      <h4 className="flex flex-row content-center text-slate-50 px-5" onClick={handleSectionClick}>
        <button>
          <SectionArrow sectionOpen={sectionOpen} />
        </button>
        {title}
      </h4>

      <div className={`transition-all duration-300 ease-in-out overflow-auto ${sectionOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"}`} >
        <ul className="bg-slate-950 p-5 flex flex-col gap-4">
          {children}
        </ul>
      </div>

    </div>
  );
};

export default ItemContainer;