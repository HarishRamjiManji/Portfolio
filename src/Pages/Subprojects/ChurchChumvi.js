import React from "react";
import { useNavigate } from "react-router-dom";

const ChurchChumvi = () => {
  const navigate = useNavigate();

  return (
    <div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Church Building (1,250-Seater)</h1>
      <p><strong>Location:</strong> Chumvi Town, Machakos</p>
      <p><strong>Year:</strong> 2014 – 2017</p>
      <p>This large church building was constructed to accommodate a growing congregation. 
        The structure features a reinforced concrete foundation, elegant kitengela glass  windows, 
        and a spacious hall for worship services and community events.</p>
      
      <button onClick={() => navigate(-1)} className="back-button">
        Back to Projects
      </button>
    </div>
  );
};

export default ChurchChumvi;
