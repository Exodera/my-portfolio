import React from 'react'
import ProjectItem from '../components/ProjectItem/ProjectItem'
import "../components/ProjectItem/ProjectItem.css"
import {projectList} from '../helpers/ProjectList.js'


const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='project-items'>
        {projectList.map((project, idx)=>{
          return <ProjectItem name = {project.name} image = {project.image} id = {idx}/>
        })}
      </div>
    </div>
  )
}

// {projectList.map((project, idx)=>{
//   return <ProjectItem name = {project.name} image = {project.image} id = {idx}/>
// })}

export default Projects