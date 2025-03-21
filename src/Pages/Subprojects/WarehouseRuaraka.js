import React from "react";
import { useNavigate } from "react-router-dom";

const WarehouseRuaraka = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Warehouse & Office Block</h1>
      <p><strong>Location:</strong> Ruaraka</p>
      <p><strong>Year:</strong> 2011 (Completed in 8 Months)</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WarehouseRuaraka;
