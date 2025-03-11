import { useEffect, useState } from "react";
import ItemContainer from "../../../components/ItemContainer";

const ProjectFilter = ({ setTechsFilter }) => {
  const [techs, setTechs] = useState([])

  useEffect(() => {
    fetch('/data/tech-catalog.json')
      .then(r => r.json())
      .then(data => setTechs(data))
      .catch(console.log)
  }, [])

  return (
    <ItemContainer title='project-filter'>
      <ul className="flex flex-col gap-2">
        {
          techs.map(t =>
            <li className="flex gap-3 items-center">

              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" id={`tech_${t.id}`} value={t.id} className="peer hidden" />
                <div className="size-5 border border-gray-400 rounded-sm flex items-center justify-center peer-checked:bg-slate-500 peer-checked:border-slate-700 relative peer-checked:after:content-['✔'] peer-checked:after:text-white peer-checked:after:text-xs" />
                <img src={t.icon} className="size-6" />
                <span>{t.name}</span>
              </label>

            </li>
          )
        }
      </ul>
    </ItemContainer>
  );
};

export default ProjectFilter;