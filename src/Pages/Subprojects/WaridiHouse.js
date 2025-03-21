import React from "react";
import { useNavigate } from "react-router-dom";

const WaridiHouse = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Waridi House (6-Story Office Block)</h1>
      <p><strong>Location:</strong> Butere Road, Nairobi</p>
      <p><strong>Year:</strong> Completed 2014</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WaridiHouse;
