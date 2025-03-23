import React, { useEffect } from "react";
import "../Styles/style1.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: "false" });
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-background"></div> {/* Background image with overlay */}
      <header className="tilteaboutus">
        <h1>About Us</h1>
      </header>
      
      <div className="grid-container">
        {/* History in column 1, row 1 */}
        <div className="grid-item history" data-aos="fade-up">
          <h2 className="redtitle">Our History</h2>
          <p>
          Founded in May 2010, Harin Builders Ltd has steadily grown into one of Kenya's leading construction 
          firms.
          <br></br>
          <br></br>
          With a passionate team of professionals and cutting-edge machinery, we have delivered a wide 
          range of residential, commercial, and infrastructural projects across Kenya. 
          <br></br>
          <br></br>
          In addition to our flagship company, we have a sister firm, Shahajanand Construction Ltd, which 
          has played a pivotal role in expanding our reach and impact, contributing to several notable 
          projects across the region.
          </p>
        </div>

        {/* Mission in column 2, row 2 */}
        <div className="grid-item mission" data-aos="fade-up" data-aos-delay="200">
          <h2 className="redtitle">Our Mission</h2>
          <p>
          At Harin Builders Ltd, we are committed to providing innovative and sustainable construction 
          solutions that meet the needs of our clients. 
          <br></br><br></br>
          Our mission is to drive positive change in the
           construction industry by delivering projects that are not only high in quality but also executed
            efficiently and on time.
          <br></br><br></br>
          We strive to be a trusted partner to our clients, offering them personalized services and a 
          commitment to excellence in every aspect of the building process, from design and planning to 
          execution and completion.
          </p>
        </div>

        {/* Vision in column 1, row 3 */}
        <div className="grid-item vision" data-aos="fade-up" data-aos-delay="400">
          <h2 className="redtitle">Our Vision</h2>
          <p>
          Our vision is to become a leader in the construction industry, known for pioneering 
          innovative building techniques while upholding the highest standards of safety, sustainability,
           and customer satisfaction.
          <br></br><br></br>
          We envision a future where Harin Builders Ltd is recognized not only for its exceptional building 
          solutions but also for its contributions to the development of safe and sustainable infrastructure 
          across the continent. 
          <br></br>
          Our goal is to influence and shape the future of construction while continuously 
          pushing the boundaries of what’s possible.
          </p>
        </div>

        {/* Future in column 2, row 4 */}
        <div className="grid-item future" data-aos="fade-up" data-aos-delay="600">
          <h2 className="redtitle">Our Future</h2>
          <p>
          As we look towards the future, Harin Builders Ltd is dedicated to becoming a global player
           in the construction industry. 
           <br></br><br></br>
           We are constantly exploring new technologies and sustainable 
           practices to ensure that our projects are both environmentally responsible and ahead of industry
            trends.
<br></br><br></br>
          With plans to expand into East Africa and potentially establish ourselves as a multinational 
          construction company, our future is full of exciting possibilities. We aim to continuously improve
           our services, integrate advanced building methods, and ensure our growth contributes to the 
           betterment of communities through innovative infrastructure projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
