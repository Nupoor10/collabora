import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div>
      Home
      <button onClick={() => {navigate("/userprofile")}}>Complete Profile</button>
    </div>
  )
}
