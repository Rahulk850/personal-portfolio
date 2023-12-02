import React from "react";
import "./Practice.css";
import { Link  , useNavigate} from "react-router-dom";
import svg from "./north_east.svg";
import phone from "./Communication .svg";
import msg from "./Communication-msg.svg";
import vector from "./Vector.svg";
import photo from "./Img.png"
import { Sidebar } from "./Sidebar/Sidebar";
import "./Queries.css"

export const Practice = () => {

  const navigate = useNavigate();
  const handleText =()=>{
     navigate('/contact');
  }
  return (
    <div className="homepage">
      {/* <Sidebar/> */}
      <div className="hero">
        <div className="content2">
          <div className="vec">
            <img src={vector} alt="" srcset="" />
          </div>
          <div className="head-txt">
            <p className="head-p">
              my name is <span>rahul kumar...</span>
            </p>
            <p className="details-p">
              Web Developer <span>based in </span>India
            </p>
            <div className="txt-button" onClick={handleText}>
              Let’s talk with me
              <img src={svg} alt="" />
            </div>

            <div className="socials2">
              <div className="cntct">
                <div className="communication">
                  <img src={phone} alt="" />
                  +91 8505067715
                </div>
                <div className="communication">
                  <img src={msg} alt="" />
                   rahulkumar8505067715@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <div className="photo-container">
            <img src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
