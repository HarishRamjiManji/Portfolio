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
      <p>A modern office complex designed for corporate and commercial use.<br></br>
      Features include high-speed elevators, ample parking, and energy-efficient systems.<br></br>
      Strategically located on Butere Road, providing easy access to Nairobi’s business district.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WaridiHouse;
