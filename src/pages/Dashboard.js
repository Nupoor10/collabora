import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import getUserIdFromToken from '../utils/jwtUtils';
import axios from 'axios';
import toast from 'react-hot-toast';

const Dashboard = () => {

  const { user } = useAuthContext();
  const [ companyProfile, setCompanyProfile ] = useState({
    about : ' ',
    location: ' ',
    github: ' ',
    linkedIn: ' '
  })

  useEffect(() => {

    const fetchProfile = async() => {
      try {
        if(user) {
          const userId = getUserIdFromToken(user?.accessToken)
          const response = await axios.get(`/org/profile/fetchOne/${userId}`);
          console.log(response);
          if(response.status === 200) {
            setCompanyProfile(response?.data)
          }
        }
      } catch(error) {
        console.log(error);
      }
    }

    fetchProfile();
  }, [user]);

  const handleAddDetails = async(e) => {
    e.preventDefault();
    try {
      if(user) {
        const userId = getUserIdFromToken(user?.accessToken)
        const response = await axios.put(`/org/profile/update/${userId}`, 
          companyProfile);
        console.log(response);
        if(response.status === 200) {
          toast.success("Added Successfully!");
        }
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="Container">
    <div className="left">
       <h1>Company Registration Form</h1>
    <form id="registrationForm">

        <div className="sidebyside">
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" required/><br></br>
        </div>

        <div className="sidebyside">
            <label for="companyGithub">Company Github :</label>
            <input type="text" id="companyGithub" name="companyGithub" required/><br></br>
        </div>

        <div className="sidebyside">
            <label for="companyLinkdein">Company LinkedIn :</label>
            <input type="text" id="companyLinkdei" name="companyLinkedIn" required/><br></br>
        </div>

        <div className="sidebyside">
            <label for="companyDescription">About Company:</label>
            <textarea id="companyDescription" name="companyDescription" rows="4" required></textarea><br></br>
        </div>

        <input onClick={(e) => {handleAddDetails(e)}} type="submit" value="Submit"/>
    </form>
    </div>

    <div className="right">
       
    </div>
    </div>
  )
}

export default Dashboard