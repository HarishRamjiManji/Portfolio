import React from "react";
import { useNavigate } from "react-router-dom";

const BungalowNyari = () => {
  const navigate = useNavigate();

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>1 Bungalow</h1>
      <p><strong>Location:</strong> Nyari Estate, Nairobi</p>
      <p><strong>Year:</strong> 2006 – 2007</p>
      <p>Additional details about this project go here.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default BungalowNyari;
