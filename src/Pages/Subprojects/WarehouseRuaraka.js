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
      <p>A multipurpose facility combining warehousing and office space for businesses.<br></br>
      Constructed within a tight deadline of 8 months to meet operational demands.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WarehouseRuaraka;
