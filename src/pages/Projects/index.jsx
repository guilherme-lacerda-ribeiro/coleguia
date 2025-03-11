import { useEffect, useState } from 'react';
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [techsFilter, setTechsFilter] = useState([])

  useEffect(() => {
    fetch('/data/project-catalog.json')
      .then(r => r.json())
      .then(data => setProjects(data))
      .catch(console.log)
  }, [])

  useEffect(() => {
    console.log(techsFilter)
  }, [techsFilter])

  return (
    <>
      <h2 className="px-7 py-5 text-slate-300">_projects</h2>
      <div id='project-wrapper' className="flex flex-col gap-1">
        <section className="bg-slate-700 pt-3">
          <ProjectFilter setTechsFilter={setTechsFilter} />
        </section>
        <section id='project-list'>
          <ul className='pt-3 flex flex-col gap-7'>
            {
              projects.map(p => <li> <ProjectCard project={p}/> </li>)
            }
          </ul>
        </section>
      </div>
    </>
  );
};

export default Projects;