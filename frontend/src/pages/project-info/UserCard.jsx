import React from 'react'
import "./usercard.css"

const UserCard = (props) => {
  return (
    <div className='user-card'>
        <img src={props.image} alt={props.name} />
        <div className='user-content'>
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        </div>
    </div>
  )
}

export default UserCard