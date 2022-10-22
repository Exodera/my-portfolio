import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../helpers/ProjectList';
import './ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id]
     

  return (
    <div className='projectDisplay'>
        <h1>{project.name}</h1>
        <img className='proj-image' alt = 'project' src ={project.image} />
        <p className='proj-skills'><b>Skills:</b> {project.skills} </p>
    </div>
  )
}

export default ProjectDisplay
