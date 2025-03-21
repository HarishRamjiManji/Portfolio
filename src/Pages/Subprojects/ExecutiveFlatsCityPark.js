import React from "react";
import { useNavigate } from "react-router-dom";

const ExecutiveFlatsCityPark = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>24 Executive Flats</h1>
      <p><strong>Location:</strong> City Park Estate, Nairobi</p>
      <p><strong>Year:</strong> 2013 – 2015</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default ExecutiveFlatsCityPark;
