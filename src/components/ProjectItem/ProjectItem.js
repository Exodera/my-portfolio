import React from 'react'

const ProjectItem = ({image , name}) => {
  return (
    <div className='project-item'>
        <div className='bgImage' style={{ backgroundImage: `url(${image})`}}></div>
        <h3>{name}</h3>
    </div>
  )
}
// style={{ backgroundImage: `url(${image})`}}

export default ProjectItem