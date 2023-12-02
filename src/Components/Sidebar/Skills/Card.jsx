import React from "react";
import "./Card.css";
import Tilt from "react-parallax-tilt";

export const Card = ({ project }) => {
  const handleLink =()=>{

  }
  return (
    <div className="card-container">
      <div className="txt-container">
        <div className="upper-txt">{project.uppertxt}</div>
        <div className="desc-txt">{project.details}</div>
        <div className="icon-container">
          <a href={project.link} target="blank"><img src={project.icon} alt="" /></a>
        </div>
      </div>
      <Tilt className="parallax-effect" perspective={500}>
        <div className="image-container">
          <img src={project.image} alt="" />
          <div className="after-text">
            <div className="inner-element">
            <div className="txt-on-image">
              <p>
                {project.pro_details} 
              </p>
            </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
