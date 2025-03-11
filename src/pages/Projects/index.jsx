import { useEffect, useState } from 'react';
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [techsFilter, setTechsFilter] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    fetch('/data/project-catalog.json')
      .then(r => r.json())
      .then(data => {setProjects(data); setFilteredProjects(data)})
      .catch(console.log)
  }, [])

  useEffect(() => {
    if (techsFilter.length === 0) { setFilteredProjects(projects); return }

    setFilteredProjects(
      projects.filter(
        project => project.techs.some(
          tech => techsFilter.includes(tech)
        )
      )
    )

  }, [techsFilter, projects])

  return (
    <>
      <h2 className="px-7 py-5 text-slate-300">_projects</h2>
      <div id='project-wrapper' className="flex flex-col gap-1">
        
        <section className="bg-slate-700 pt-3">
          <ProjectFilter setTechsFilter={setTechsFilter} />
        </section>

        <section id='project-list'>
          <ul className='pt-3 pb-7 flex flex-col gap-7'>
            {
              filteredProjects.map(p =>
                <li key={p.id}> <ProjectCard project={p}/> </li>
              )
            }
          </ul>
        </section>
        
      </div>
    </>
  )
}

export default Projects