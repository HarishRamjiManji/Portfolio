import React from "react";
import { useNavigate } from "react-router-dom";

const ResidentialFlatsWanyee = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>40 Residential Flats</h1>
      <p><strong>Location:</strong> Wanyee Road, Nairobi</p>
      <p><strong>Year:</strong> 2009 – 2011</p>
      <p>A mix of one, two, and three-bedroom apartments designed for urban living.<br></br>Located 
      near key infrastructure, offering convenience and accessibility.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default ResidentialFlatsWanyee;
