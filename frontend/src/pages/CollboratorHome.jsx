import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ShowListOfProjects from './Projects/ProjectCardList';
import './collaboratorhome.css'
const CollaboratorHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownOptions = [
    <Link className='my-profile' to='/userProfile'>My Profile</Link>, 
    'My Projects',
    'Logout',
  ];

  return (
    <div>
      <header className="header">
        <div className='header-content'>
        <h1>Welcome to Collabora, Nupoor! Ready to explore collaboration opportunities?</h1>
        <div className="dropdown">
          {/* <button className="username-btn" onClick={toggleDropdown}>Username</button> */}
          <img className="profile" src='./images/group.png' onClick={toggleDropdown}/>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {dropdownOptions.map((option, index) => (
                <div key={index} className='option' onClick={() => console.log(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
        
      </header>

      <main className="feed">
        <div className='feed-content'>
        <h3>Find projects that match your interests and skills to contribute to. Explore open source projects that will help you discover your passion and expertise. </h3>
        <ShowListOfProjects />
        </div>
        {/* Your feed content */}
      
      </main>
    </div>
  );
};

export default CollaboratorHome;
