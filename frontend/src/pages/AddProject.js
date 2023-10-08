import React from 'react'
import { Link } from "react-router-dom"
import "./addproject.css"
import { TagsInput } from 'react-tag-input-component'

const AddProject = () => {
  return (
    <div>
       <form className='add-project-main'>
                <div className="registerUser-form">
                    <div className="registerUser-container">

                            <div className="left-register">
                            <h1>Add Project </h1>
                            <label className="name">Name:</label>
                            <input type="text" id="username" placeholder="enter name..."  />
                            <label>Description:</label>
                            <textarea id='project-des' placeholder="enter description..." rows={7} cols={6}/>
                            <label>Website:</label>
                            <input type="url" id="project-web" placeholder="enter website..." />
                            <label>Repository: </label>
                            <input type="url" id="project-repo" placeholder="enter repository..." />

                            
                            {/* <p>Already have an account?<Link className='link' to='/login'>Login</Link></p>  */}
                            
                            </div>
                            <div className="right-register">
                            <label>Contact:</label>
                            <input type="text" id="project-contact" placeholder="enter email or phone number..."  />
                            <label>Technology Stack:</label>
                            {/* <TagsInput name="tags" placeHolder='enter technological stacks...'/> */}
                            <input type="text" id="tech" placeholder="enter email or phone number..."  />
                            <label>Contributor Guidelines : </label>
                            <input type="url" id="project-guide" placeholder="enter link for guidelines..." />
                            <label>Maintainers : </label>
                            <input type="text" id="project-maintain" placeholder="enter names..." />
                            <label className="status">Project Status:</label>
                             <select name="statusType" id="statustype">  
                             <option id="usertype" value="Active developement">Active developement</option>
                            <option id="usertype" value="Maintenance mode">Maintenance mode</option>
                            <option id="usertype" value="Maintenance mode">Maintenance mode</option>
                            </select> 
                        </div> 
                        
                    </div>
                    <div className='btn-sec'>
                    <button className="confirm-btn" type='submit'>Submit</button>
                    </div>

                </div>
                
            </form>
    </div>
  )
}

export default AddProject