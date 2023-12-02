import React from "react";
import { Skillscard } from "./Skillscard";
import "./Skill.css";
import react_icon from "./react-icon.svg";
import js_icon from "./java-script.svg";
import css_icon from "./css-icon.svg";
import html_icon from "./html-icon.svg";
import mongo_icon from "./mongodb-icon.svg";
import node_icon from "./nodejs-icon.svg";
import ex_icon from "./express-icon.svg";
import c_icon from './c-icon.svg'
import cpp_icon from './cpp-icon.svg'
import dsa_icon from './dsa-icon.png'

export const Skill = () => {
  const data = [
    {
      icon: react_icon,
      progbar: 89,
      text: "React.js",
    },
    {
      icon: js_icon,
      progbar: 90,
      text: "JavaScript",
    },
    {
      icon: css_icon,
      progbar: 78,
      text: "Css3",
    },
    {
      icon: html_icon,
      progbar: 80,
      text: "HTML5",
    },
    {
      icon: mongo_icon,
      progbar: 50,
      text: "MongoDb",
    },
    {
      icon: node_icon,
      progbar: 50,
      text: "Node.js",
    },
    {
      icon:ex_icon,
      progbar:50,
      text:"Express js",
    },
  ];

  const data2 = [
    {
      icon: c_icon,
      progbar: 90,
      text: "C",
    },
    {
      icon: cpp_icon,
      progbar: 90,
      text: "C++",
    },
    {
      icon: dsa_icon,
      progbar: 50,
      text: "Data Structure and Algorithm",
    },
    
  ]

  return (
    <div className="skill-container">
      <div className="skills">
        <div className="skills-heading">
          <div className="skill-heading-txt">DEVELOPMENT SKILLS</div>
        </div>
        <div className="skill-1">
          {data.map((skills, index) => (
            <Skillscard skills={skills} key={index} />
          ))}
        </div>
        <div className="skills-heading">
          <div className="skill-heading-txt">
            SOFTWARE SKILLS
          </div>
            </div>
          <div className="skill-1">
          {data2.map((skills, index) => (
            <Skillscard skills={skills} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
