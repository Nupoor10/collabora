import React from 'react'
import ShowListOfProjects from './Projects/ProjectCardList'
import "./organizerhomepage.css"
import Navbar from "../components/Navbar";

const OrganizerHomepage = () => {
  return (
    <>
    <Navbar/>
    <div className='organizer-home'>
    <h1 className='project-heading'>OUR PROJECTS</h1>
        <ShowListOfProjects />
    </div>
    </>
  )
}

export default OrganizerHomepage