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
      <p>These executive flats were designed for urban professionals,
         featuring modern apartments with open-plan kitchens, high-quality fittings, 
         and secure parking.<br></br> The project emphasized both aesthetics and functionality 
         to provide a comfortable living environment.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default ExecutiveFlatsCityPark;
