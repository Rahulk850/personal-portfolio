import React from 'react'
import { Card } from './Card'
import './Projects.css'
import {motion} from 'framer-motion'
import Aicon from './arrow-icon-b.svg'
import temp from './temp-photo.jpeg'
import note from './note-box-2.png'
import news from './news-web.png'
import text_utils from './text-utils.png'
import arrow from './arrow-icon-b-2.svg'
import camera from './camera.jpg'
export const Projects = () => {
    const data = [
        {
          uppertxt:"React js , Atlas",
          details:"Note Taking website",
          pro_details:"this website take notes from user..",
          icon:Aicon,
          image:note,
          link:"https://note-box-app.onrender.com/"
        },
        {
          uppertxt:"React Js+API",
          details:"Real Time News Website",
          pro_details:"this website take notes from user..",
          icon:Aicon,
          image:news,
          link:"https://note-box-app.onrender.com/"
        },
        {
          uppertxt:"React Js, Bootstrap",
          details:"Text Utilization Website",
          pro_details:"this website take notes from user..",
          icon:Aicon,
          image:text_utils,
          link:"https://rahulk850.github.io/new-app/"
        },
        {
          uppertxt:"React-Native",
          details:"Camera Mobile App",
          pro_details:"this website take notes from user..",
          icon:Aicon,
          image:camera,
          link:""
        }
       
       
    ]
  return (
    
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="parent-container">
    <div className="projects-container">
      <div className="recent-projects">
        <p className='pro-tittle'>work</p>
        <p className='pro-rp'>RECENT PROJECTS</p>
      </div>
         <div className="projects">

        {data.map((projects,index)=>(
      <Card project={projects} key={index} />
    ))
    }
         </div>
         <div className="more-pro">
         <div className="txt-button">
          <a href="https://github.com/Rahulk850" target='blank'> 
          More Projects
         <img src={arrow} alt="" />
          </a>

            </div>
         </div>
    </div>
    </motion.div>
  )
}
