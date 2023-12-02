import React from "react";
import "./About.css";
import { Sidebar } from "../Sidebar/Sidebar";
import pro_photo from "./Img.png";
import svg1 from "../north_east.svg";
import phone from "../Communication .svg";
import msg from "../Communication-msg.svg";
import age from "../age.svg";
import locate from "../location.svg";
import quote from "../quotes-r.svg";
import sig from "../signature.png";
import '../Queries.css'

export const About = () => {
  return (
    <div className="aboutpage">
      <div className="content2">
        <div className="left-content">
          <p className="welcome">Nice To Meet you!</p>
          <p className="tittle">WELCOME TO...</p>
          <div className="pro-image">
            <img src={pro_photo} alt="" />
          <div className="signature">
            <img src={sig} alt="" />
          </div>
          </div>
          <div className="left-txt">
            <p className="name">RAHUL KUMAR</p>
            <p className="details-p">
              Web Developer<span>based in </span>India
            </p>
            <div className="download-cv">
              Download Cv
              <img src={svg1} alt="" />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="upper-details">
            <div className="cntct2">
              <div className="upper-1">
                <div className="communication box-1">
                  <img src={phone} alt="" />
                  +91 8505067715
                </div>
                <div className="communication box-2">
                  <img src={msg} alt="" />
                  rahulkumar8505067715@gmail.com
                </div>
              </div>
              <div className="upper-2">
                <div className="communication box-3">
                  <img src={age} alt="" />
                  21 years
                </div>
                <div className="communication box-4">
                  <img src={locate} alt="" />
                  Alwar , Rajasthan , India
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="left-down">
            <div className="left-down-1">
              <div className="about-1">
                <p className="about-1-head">B.E. , C.S.E. GRADUATE</p>
                <div className="pu">
                  <a href="https://puchd.ac.in/">from Panjab University</a>
                </div>
                <p className="about-1-para">
                  Hello there! My name is <span>Rahul Kumar</span>. I am a
                  Software Engineer & Web developer, and I'm very passionate and
                  dedicated to my work.
                </p>
              </div>
              <div className="about-2">
                <p className="about-1-head">5+ Projects</p>
                <div className="pu">Including Internship</div>
                <p className="about-1-para">
                  Hello there! My name is <span>Rahul Kumar</span>. I am a
                  Software Engineer & Web developer, and I'm very passionate and
                  dedicated to my work.
                </p>
              </div>
            </div>
            <div className="left-down-2">
              <div className="quote">
                
                  <img src={quote} alt="" />
                
                
                  <p>
                    “To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.” - A. P. J. Abdul Kalam
                  </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
