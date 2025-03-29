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
      <p>This luxurious bungalow was designed with modern architecture, 
        featuring spacious rooms, high ceilings, and a beautifully landscaped compound.<br></br> 
        The project included high-end finishes and sustainable construction materials.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default BungalowNyari;