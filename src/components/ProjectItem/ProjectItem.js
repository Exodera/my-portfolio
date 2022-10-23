import React from 'react'
import { useNavigate} from 'react-router-dom'

const ProjectItem = ({image , name, id}) => {
  const navigation = useNavigate()
  return (
    <div className='project-item' onClick={()=>{
      navigation('/projects/' + id);
    }}>
        <div className='bgImage' style={{ backgroundImage: `url(${image})`}}></div>
        <h3>{name}</h3>
    </div>
  )
}
// style={{ backgroundImage: `url(${image})`}}

export default ProjectItem