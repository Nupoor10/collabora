import React from 'react'
import "./projectscard.css"
import { useNavigate } from 'react-router-dom'

const ProjectsCard = (props) => {

    const navigate = useNavigate();

  return (
    <div className='project-card'>
        <img src={props.image} alt={props.name} />
        <div className='project-content'>
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        </div>
       
        <button onClick={() => {navigate("/project-info")}} className='confirm-btn'>Show More</button>
    </div>
  )
}

export default ProjectsCard