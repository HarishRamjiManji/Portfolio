import React from "react";
import { useNavigate } from "react-router-dom";

const WarehouseRuarakaSingle = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>1 Warehouse</h1>
      <p><strong>Location:</strong> Ruaraka, Nairobi</p>
      <p><strong>Year:</strong> 2010</p>
      <p>A stand-alone warehouse offering efficient storage solutions with easy transport access.<br></br>
      Designed for bulk storage with a durable structural framework.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default WarehouseRuarakaSingle;
