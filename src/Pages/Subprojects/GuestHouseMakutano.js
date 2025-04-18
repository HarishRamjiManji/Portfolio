import React from "react";
import { useNavigate } from "react-router-dom";

const GuestHouseMakutano = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Guest House</h1>
      <p><strong>Location:</strong> Makutano, Kyumbi, Machakos</p>
      <p><strong>Year:</strong> Completed 2017</p>
      <p>A serene and well-designed guest house catering to travelers and visitors in Makutano.<br></br>
Features modern architecture, spacious rooms, and comfortable amenities for guests.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default GuestHouseMakutano;
