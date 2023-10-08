import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import {toast} from 'react-hot-toast'
import axios from 'axios';
import "./UserForms.css";
import getUserIdFromToken from "../utils/jwtUtils";

import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from '../hooks/useAuthContext';


const UserAchievements = () => {
    const [issueDate, setIssueDate] = useState(new Date());
    const [ title, setTitle] = useState(" ");
    const [ issuer, setIssuer] = useState(" ");
    const [description, setDescription] = useState(" ");
    const { user } = useAuthContext();

    const handleAddAchievements = async(e) => {
        e.preventDefault();
        try {
            const userId = getUserIdFromToken(user?.accessToken);
            if (userId) {
                console.log('User ID:', userId);
                let response = await axios.post("/user/achievements/", {
                    date : issueDate,
                    title,
                    issuer,
                    description,
                    user : userId
                });
                console.log(response);
                if(response.status === 201) {
                    toast.success('Successfully saved!');
                    setIssueDate(new Date());
                    setTitle(" ");
                    setDescription(" ");
                    setIssuer(" ");
                } else {
                    toast.error("Error occurred while saving!")
                }
              } else {
                console.error('Unable to get user ID from token');
              }
        } catch(error) {
            console.log(error);
        }
    }

    
  return (
    <div className="form__header">
        <h1>User Achievements</h1>
        <form id="registrationForm">
            <div className="date">
                <div className="side">
                    <label for="IssueDate"> Issue Date:</label>
                    <DatePicker selected={issueDate} onChange={(date) => setIssueDate(date)} /><br></br>
                </div>
            </div>
        
            <div className="side">
                <label for="Position">Title :</label>
                <input type="text" id="Position" name="Position" required onChange={(e) => {setTitle(e.target.value)}}/><br></br>
            </div>

            <div className="side">
                <label for="companyName">Issuer:</label>
                <input type="text" id="companyName" name="companyName" required onChange={(e) => {setIssuer(e.target.value)}}/><br></br>
            </div>

            <div className="side">
                <label for="companyDescription">Description:</label>
                <textarea id="companyDescription" name="companyDescription" rows="4" onChange={(e) => {setDescription(e.target.value)}}></textarea><br></br>
            </div>
            <input onClick={(e) => {handleAddAchievements(e)}} className="submit__form" type="submit" value="Submit"/>
        </form>
    </div>
    
  );
}

export default UserAchievements