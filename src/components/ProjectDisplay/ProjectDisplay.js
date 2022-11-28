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
       <main className='project-content'>
        <h1>{project.name}</h1>
        <img className='proj-image' alt = 'project' src ={project.image} />
        
        <div className='project-info'>
            <h3>Skills</h3>
            <p> {project.skills}</p>

            <h3>Project Link</h3>
            <a className="project-link" href={project.gitHub} alt={project.name} target={'_blank'} rel="noreferrer" >{project.liveLink}</a>
            
            <button className='github-btn'>
              <a href={project.gitHub} alt={project.name} target={'_blank'} rel="noreferrer" className='github'>
                <AiFillGithub color='black' size={'1.225em'}/>
                <h3 style={{color: 'black'}}>Github Repository</h3>
              </a>
            </button>
        </div>
        
        
        {/* <div className='proj-text'>
          <p className='proj-skills'><b className='skillss'>Skills:</b> {project.skills}</p>
          <p className='proj-skills'><b className='skillss'>Live Link:</b> {project.liveLink}</p>
          <a href={project.gitHub} target={'_blank'} rel="noreferrer"><AiFillGithub color={'rgb(30, 15, 98)'} size={'4em'}/></a>
        </div> */}

       </main>
       
    </div>
  )
}

export default ProjectDisplay
