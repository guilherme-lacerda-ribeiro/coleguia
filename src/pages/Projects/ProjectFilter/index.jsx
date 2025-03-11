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

  const handleFilterChange = (e) => {
    const checkbox = e.currentTarget.querySelector("input[type=checkbox]")
    if (!checkbox) return
    const techId = Number(checkbox.value)

    setTechsFilter(prev =>
      checkbox.checked
        ? [...prev, techId] // add if checked
        : prev.filter(id => id !== techId) // remove if unchecked
    )
  }

  return (
    <ItemContainer title='project-filter'>
      <ul className="flex flex-col gap-2">
        {
          techs.map(t =>
            <li key={t.id}>
              <label className="flex items-center gap-2 cursor-pointer" onClick={handleFilterChange}>
                
                <input type="checkbox" id={`tech_${t.id}`} value={t.id} className="peer hidden" />
                
                <div className="size-5 border border-gray-400 rounded-sm mr-1
                  flex items-center justify-center 
                peer-checked:bg-slate-500 peer-checked:border-slate-700
                  peer-checked:after:content-['✔'] peer-checked:after:text-white peer-checked:after:text-xs" />
                
                <img src={t.icon} className="size-6" />
                <span>{t.name}</span>
              
              </label>
            </li>
          )
        }
      </ul>
    </ItemContainer>
  )
}

export default ProjectFilter