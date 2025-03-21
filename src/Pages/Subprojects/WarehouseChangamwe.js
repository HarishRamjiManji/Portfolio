import React from "react";
import { useNavigate } from "react-router-dom";

const WarehousesChangamwe = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>9 Warehouses</h1>
      <p><strong>Location:</strong> Changamwe Road, Nairobi</p>
      <p><strong>Year:</strong> 2007 – 2009</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WarehousesChangamwe;
