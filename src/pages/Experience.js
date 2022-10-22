import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import {MdSchool} from 'react-icons/md'
import "./styles/Experience.css"
import {FaUniversity} from 'react-icons/fa'



const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='rgb(30, 15, 98)'>
        <VerticalTimelineElement 
        className='timeline-education'
        date="2014 - 2018"
        icon={<MdSchool/>}
        iconStyle = {{background: "rgb(30, 15, 98)", color: 'white'}} 
        >
          <h3 className='timeline-title'>
          Attended High School Westonaria, Gauteng
          </h3>
          <p> Earned Matric Certificate</p> 
        </VerticalTimelineElement>
         
         <VerticalTimelineElement
         className='timeline-uni'
         date ="2019 - Present"
         icon ={<FaUniversity/>}
         iconStyle={{background: "rgb(30, 15, 98)", color: "white"}}
         >
          <h3 className='timeline-title'> 
            Attended Central University of Technology,<br/>Free State
          </h3>
          <p>Currently working on Diploma in Information Technology</p>

         </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience