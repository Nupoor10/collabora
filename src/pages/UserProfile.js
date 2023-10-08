import React, { Children, useEffect, useState } from 'react'
import "./UserProfile.css";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import UserAchievements from '../components/UserAchievements';
import UserExperience from '../components/UserExperience';
import UserProjects from '../components/UserProjects';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import getUserIdFromToken from '../utils/jwtUtils';
import toast from 'react-hot-toast';

const UserProfile = () => {
    const userData = {
        name: 'John Doe',
        bio: 'Add a bio',
        // bio: 'C4GT 2023 @Bahmni, || Full Stack Intern @Andwemet || CodeValds Hackathon Winner || SIH 2022 Finalist || Full Stack Web Deve',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Development'],
        workExperience: [
          { company: 'ABC Corp', position: 'Front-end Developer',description:'Developing frontend app from scratch to view medical records of patients with FHIR document rendering, custom webpack builds, unit and integration tests. Developing a Spring Boot microservice to expos', year: '2019-2022' },
          { company: 'ABC Corp', position: 'Back-end Developer',description:'Developing frontend app from scratch to view medical records of patients with FHIR document rendering, custom webpack builds, unit and integration tests. Developing a Spring Boot microservice to expos', year: '2020-2021' },

        ],
        achievements: [
            {
              date: '2023-01-15',
              title: 'Awarded Developer of the Year',
              issuer: 'XYZ Organization',
              description: 'Recognized for outstanding contributions to web development and innovation.'
            },
        ],
          
        projects: [
            {
              startDate: '2023-01-01',
              endDate: '2023-02-15',
              name: 'E-Campus',
              description: 'It is an online educational platform that provides a comprehensive and interactive learning experience for students, educators, and institutions. ',
              url: 'https://example.com/project-a'
            },
        ],
      };

      const navigate = useNavigate();
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const [modalType, setModalType] = useState("");
      const [bio, setbio] = useState("");
      const [ userProfile, setUserProfile] = useState({});
      const [ userProject, setUserProject] = useState([]);
      const [ userExperience, setUserExperience] = useState([]);
      const [ userAchievements, setUserAchievements] = useState([]);
      const [ skills, setSkills] = useState(['React', 'JavaScript', 'HTML', 'CSS', 'Acting', 'Handsome', 'witcher', 'Superman']);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleExperience = () => {
    setModalType("experience");
    openModal();
  }

  const handleAchievements = () => {
    setModalType("achievement");
    openModal();
  }

  const handleProjects = () => {
    setModalType("project");
    openModal();
  }

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchProfile = async() => {
      if (user) {
        const userId = getUserIdFromToken(user?.accessToken);
        const response = await axios.get(`/user/profile/fetch/${userId}`);
        console.log(response);
        if(response.status === 200) {
          console.log("Fetched!");
          setUserProfile(response?.data?.profile);
          setbio(response?.data?.profile?.bio)
          // setSkills(response?.data?.profile?.skills)
          setUserProject(response?.data?.project);
          setUserExperience(response?.data?.experience);
          setUserAchievements(response?.data?.achievements);
        }
      }
    }

    fetchProfile();
  }, [user]);

  const handleBioUpdate = async() => {
    try {
      if (user) {
        const userId = getUserIdFromToken(user?.accessToken);
        const response = await axios.put(`/user/profile/update/${userId}`, {
          bio
        })
        console.log(response);
        if(response.status === 200) {
          toast.success("Updated!!")
        }
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleSkillsUpdate = async() => {
    try {
      if (user) {
        const userId = getUserIdFromToken(user?.accessToken);
        const response = await axios.put(`/user/profile/update/${userId}`, {
          skills
        })
        console.log(response);
        if(response.status === 200) {
          toast.success("Updated!!")
        }
      }
    } catch(error) {
      console.log(error);
    }
  }

    return(
        <div>
          <h1 style={{marginLeft : '40px'}} onClick={() => {navigate("/")}}><IoArrowBackSharp /></h1>
        <section className='user-identity'>
          {/* <h2>User Information</h2> */}
          <div className='user-identity-container'>
            <div className='name-img'>
                <img src="./images/henry.jpg" alt="User" height={200} width={200}/>
                <h1>Sana Shaikh</h1>
            </div>
            <div className='bio'>
                <input type='text' value={bio} onChange={(e) => setbio(e.target.value)}/>
                <button style={{border: 'none', backgroundColor: 'white', fontSize: '22px'}} onClick={handleBioUpdate}><AiFillEdit /></button>           
            </div>
          </div>
        </section>
  
        <section className='skills'>
            <div className='skills-container'>
            <h2>Skills</h2>
            <ul>
                {userData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            </div>
          
        </section>
  
        <section className='work-experience'>
            <div className='work-experience-container'>
                <div className='add-work'>
                <h2>Work Experience</h2> 
                
                <button onClick={handleExperience} className='confirm-btn'>Add Experience</button>
                </div>
                <div className='divider'></div>
                <div className='work-content'> 
                <ul>
                {userExperience.map((experience, index) => (
                <li key={index}>
                    <div> Year: ({experience?.start?.substring(0, 10)}) - ({experience?.end?.substring(0, 10)})</div>
                    <div className='vertical-divider'></div>
                    <div><span className='position'>{experience?.position}</span> <br/> {experience?.company} <br /> {experience?.description}</div>
                    
                </li>
                ))}
                </ul>
                </div>          
            </div> 
        </section>
  
        <section className='achievements'>
        <div className='achievements-container'>
            <div className='add-achievements'>
            <h2>Achievements</h2>
            <button onClick={handleAchievements} className='confirm-btn'>Add Achievements</button>
            </div>
            <div className='divider'></div>
            <div className='achievements-content'>
            <ul>
                {userAchievements?.map((achievement, index) => (
                <li key={index}>
                    <div className="achievement-date"> Date: <br/> {achievement?.date?.substring(0, 10)}</div>
                    <div className='vertical-divider'></div>
                    <div className="achievement-info">
                    <div className="achievement-title">{achievement?.title}</div>
                    <div className="achievement-issuer">{achievement?.issuer}</div> 
                    <div className="achievement-description">{achievement?.description}</div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>

  
        <section className='projects'>
            <div className='projects-container'>
                <div className='add-projects'>
                <h2>Projects</h2>
                <button onClick={handleProjects} className='confirm-btn'>Add Projects</button>
                </div>
                <div className='divider'></div>
         
            <ul>
            {userProject?.map((project, index) => (
                <li key={index}>
                <strong>{project.name}</strong>
                <div className='start-date'>Start Date: {project?.start?.substring(10)}</div>
                <div className='start-date'>End Date: {project?.end?.substring(10)}</div>
                <div>Description: {project?.description}</div>
                <div>URL: <a href={project?.url} target="_blank" rel="noopener noreferrer">{project.url}</a></div>
                </li>
            ))}
            </ul>
            </div>
       
        </section>
        <Modal isOpen={modalIsOpen} closeModal={closeModal}>
          {(modalType === "experience") ? <UserExperience /> : (modalType === "achievement") ? <UserAchievements /> : <UserProjects />}
        </Modal>
      </div>
    );
};
    


export default UserProfile
