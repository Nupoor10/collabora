
import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <h3>Company Name</h3>
        <div className="location"><img className="location-img" src="./images/location.png" /><p>Location</p></div>
        <button class="btn">
    <span class="btn-text-one">Get In Touch</span>
    <span class="btn-text-two">Contact Us</span>
</button>
        
        <div>
    <Link to="/add-project" class="add-btn"><i class="animation"></i>ADD PROJECT<i class="animation"></i>
    </Link>
</div>
        <img className="profile" src='./images/group.png'/>
    </nav>
  )
}

export default Navbar