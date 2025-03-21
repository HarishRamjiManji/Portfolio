import React, { useEffect } from "react";
import "../Styles/style1.css"; // Ensure this file contains your styles
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out",once: "false" });
  }, []);

  return (
    <div className="about-us-container">
    <div className="about-us-background"></div> {/* Background image with overlay */}
    
    <br></br>
    <br></br>
    <br></br>
    <header className="pgtitle">
      <h1>About Harin Builders Ltd</h1>
    </header>
    
    <div className="timeline">
      <section className="box left" data-aos="fade-up">
        <h2 className="redtitle">Our History</h2>
        <p>
          Founded in May 2010, Harin Builders Ltd is a well-established construction
          company with a reputation for excellence. With a team of skilled professionals
          and state-of-the-art machinery, we have successfully completed numerous projects
          across Kenya. We also have a sister firm, Shahajanand Construction Ltd.
        </p>
      </section>
  
      <section className="box right" data-aos="fade-up" data-aos-delay="200">
        <h2 className="redtitle">Our Mission</h2>
        <p>
          Our goal is to empower our clients with innovative and user-friendly
          construction solutions, ensuring efficiency and quality in all our
          projects.
        </p>
      </section>
      
      <section className="box left" data-aos="fade-up" data-aos-delay="400">
        <h2 className="redtitle">Our Vision</h2>
        <p>
          To be a leading force in the construction industry, revolutionizing
          building techniques while maintaining high standards and customer
          satisfaction.
        </p>
      </section>
  
      <section className="box right" data-aos="fade-up" data-aos-delay="600">
        <h2 className="redtitle">Our Future</h2>
        <p>
          Looking ahead, we aim to expand our expertise, integrate sustainable
          construction methods, and continue delivering high-quality projects that
          redefine excellence in the industry.
        </p>
      </section>
    </div>
  </div>
  
  );
};

export default AboutUs;
