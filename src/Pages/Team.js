const MeetTheTeam = () => {
  return (
    <section id="meet-the-team" className="team-container">
      <br></br>
      <br></br>
      
      <h2 className="pgtitle1">MEET THE TEAM</h2>
      <br></br>
      <br></br>
      <div className="team-grid">
        <div className="team-member">
          <img src="rs/pics/dad.jpeg" alt="Director" className="team-pic" />
          <h3 className="redtitle">Harish Ramji</h3>
          <p className="team-role"><b>Director / Entrepreneur</b></p>
          <p className="team-desc">
            Harish founded this company to follow his dreams and build magnificent pieces of art.
          </p>
        </div>
        <div className="team-member">
          <img src="rs/pics/mum1.jpg" alt="Co-Director" className="team-pic" />
          <h3 className="redtitle">Pushpa Harish Ramji</h3>
          <p className="team-role"><b>Co-Director</b></p>
          <p className="team-desc">
            Pushpa is a qualified teacher who manages the company's accounting and administration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
