import React from 'react'
import './Skill.css'
import ProgressBar from '@ramonak/react-progress-bar'

export const Skillscard = ({skills}) => {
  return (
    <div className='skillcard-container'>
        <div className="skill-icon">
         <img src={skills.icon}/>
        </div>
        <div className="skill-right-container">

        <div className="skill-progbar">
        <ProgressBar className='progressbar' completed={skills.progbar}  transitionDuration='2s' transitionTimingFunction='ease-in' animateOnRender={true} height='0.7rem'
        borderRadius= '0' bgColor='#ff6634'
        />
        </div>
        <div className="skill-txt">
          {skills.text}
        </div>
        </div>
    </div>
  )
}
