import React from "react";
import { useNavigate } from "react-router-dom";

const OfficeBlockBabaDogo = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Six-Story Office Block & Godowns</h1>
      <p><strong>Location:</strong> Baba Dogo Road, Nairobi</p>
      <p><strong>Year:</strong> 2009 – 2011</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default OfficeBlockBabaDogo;
