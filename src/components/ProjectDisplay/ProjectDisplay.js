import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../helpers/ProjectList';
import './ProjectDisplay.css'
import {AiFillGithub} from "react-icons/ai"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id]
     
  return (
    <div className='projectDisplay'>
        <h1>{project.name}</h1>
        <img className='proj-image' alt = 'project' src ={project.image} />
        
        <div className='proj-text'>
        <p className='proj-skills'><b className='skillss'>Skills:</b> {project.skills}</p>
        <a href={project.gitHub} target={'_blank'} rel="noreferrer"><AiFillGithub color={'rgb(30, 15, 98)'} size={'4em'}/></a>
        </div>
       
    </div>
  )
}

export default ProjectDisplay
