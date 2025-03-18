const ProjectCard = ({ project }) => {
  return project && (
    <div key={`project-${project.id}`} className="px-7 flex flex-col gap-5">

      <div name='project-title' className="flex gap-2 text-xl">
        <h3 className="text-indigo-500">{project.name}</h3>
        <p>//</p>
        <p>{project.shortDesc}</p>
      </div>

      <div name='card-wrapper' className="border border-slate-600 rounded-2xl">
        <div name='card-header' className={`w-full h-32 bg-cover bg-center rounded-t-2xl`}>
          <img className="rounded-t-2xl" src={project.thumbnail} alt={`${project.name} thumbnail`} />
        </div>
        <div name='card-info' className="p-7 flex flex-col gap-7">
          <p className="text-xl">{project.desc}</p>
          <button className="text-slate-50 bg-slate-600 w-fit p-3 rounded-xl">
            <a href={project.url} target="_blank">view-project</a>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard