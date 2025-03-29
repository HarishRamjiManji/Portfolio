import React from "react";
import { useNavigate } from "react-router-dom";

const LuxuryBungalowsRunda = () => {
  const navigate = useNavigate();

  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1>Two Luxury Bungalows</h1>
      <p><strong>Location:</strong> Runda Meadows, Nairobi</p>
      <p><strong>Year:</strong> 2011 – 2015</p>
      <p>Two premium bungalows designed with luxury finishes, open-plan layouts, and landscaped gardens.<br></br>
Built to high standards with imported fittings and energy-efficient solutions</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default LuxuryBungalowsRunda;
