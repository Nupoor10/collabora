import React from 'react'
import "./projectinfo.css"

import { Link } from "react-router-dom"

const ProjectInfoComp = () => {

    const companyData ={
        stacks :["react", "javascript", "HTML", "CSS" ]
    }

  return (
    <div>
                <div className='project-image'>
                    <img src='https://i.ibb.co/NFYmtvS/fakeimage.jpg'/>
                </div>

                <div className='section-one'>
                    <h3>Project Title</h3>
                    <h4>Project status : Archieved</h4>
                    <p>MagicLoop enables unmoderated user interviews using voice questionnaires and conducts automatic analysis through our analysis algorithm ✨</p>
                </div>

                <hr className="break"></hr>

                <div className='section-two'>
                    <h4>Links that you needed</h4>
                    <p>Please visit the following link to explore the project:</p>
                    <Link className='website-link'>Enter the link</Link>

                    <p className='repo-para'>Check out the project using this repository link:</p>
                    <Link className='repo-link'>Enter the link</Link>
                </div>

                <hr className="break"></hr>

                <div className='section-three'>
                    <h4>Technology stack</h4>
                        <div className='stack'>
                            <ul>
                                {companyData.stacks.map((stack, index)=>(
                                    <li key={index}>{stack}</li>
                                ))}
                            </ul>
                        </div>
                </div>
                <hr className="break"></hr>
                
                <div className='section-four'>
                    <h4>Contact Details</h4>
                    <p>For enquiries, please contact us at given detail</p>
                    <p><span>Email : </span><span>abc@gmail.com</span></p>
                </div>
                <div className='contribute'>
                    <button className="contribute-btn" type='submit'>Contribute Now</button>
                </div>
            </div>
  )
}

export default ProjectInfoComp