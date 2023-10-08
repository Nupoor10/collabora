import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import {toast} from 'react-hot-toast'
import axios from 'axios';
import "./UserForms.css";
import getUserIdFromToken from "../utils/jwtUtils";

import "react-datepicker/dist/react-datepicker.css";
import { useAuthContext } from '../hooks/useAuthContext';

const UserProjects = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [name, setName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [url, setUrl] = useState(" ");

    const { user } = useAuthContext();

    const handleAddProjects = async(e) => {
        e.preventDefault();
        try {
            const userId = getUserIdFromToken(user?.accessToken);
            if (userId) {
                console.log('User ID:', userId);
                let response = await axios.post("/user/projects/", {
                    start : startDate,
                    end : endDate,
                    name,
                    description,
                    url,
                    user : userId
                });
                console.log(response);
                if(response.status === 201) {
                    toast.success('Successfully saved!');
                    setStartDate(new Date());
                    setEndDate(new Date());
                    setName(" ");
                    setDescription(" ");
                    setUrl(" ");
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
        <h1>User Projects</h1>
        <form id="registrationForm">
            <div className="date">
                <div className="side">
                    <label for="StartDate">Start Date :</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /><br></br>
                </div>

                <div className="side">
                    <label style={{marginLeft: '30px'}} for="EndDate">End Date :</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /><br></br>
                </div>
            </div>
        
            <div className="side">
                <label for="Position">Name :</label>
                <input type="text" id="Position" name="Position" required value={name} onChange={(e) => {setName(e.target.value)}}/><br></br>
            </div>

            <div className="side">
                <label for="companyName">URL:</label>
                <input type="text" id="companyName" name="companyName" value={url} onChange={(e) => {setUrl(e.target.value)}}/><br></br>
            </div>

            <div className="side">
                <label for="companyDescription">Description:</label>
                <textarea id="companyDescription" name="companyDescription" rows="4" value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea><br></br>
            </div>
            <input onClick={(e) => {handleAddProjects(e)}} type="submit" value="Submit"/>
        </form>
    </div>
    
  );
}

export default UserProjects