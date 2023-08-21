import React from "react";
import FPImage from "./FP.jpg";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={FPImage}
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
