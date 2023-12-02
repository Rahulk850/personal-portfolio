import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome , AiOutlineInfo  ,AiOutlineApartment , AiOutlineContacts} from 'react-icons/ai'
import {MdOutlineWorkspacePremium} from 'react-icons/md'
import insta from '../../Icons/insta.svg'
import x from '../../Icons/x.svg'
import linkedin from '../../Icons/linkedin.svg'

export const Ssidebar = () => {
  return (
    // <div>    
    <div className="sidebars">
    <div className="contents">
      {/* <div className="logos">
        <p>AA.</p>
      </div> */}
      < div className="menus">  
        <li>
            <div className='icons-container'>
            <Link to="/"><AiOutlineHome/></Link>
            </div>
        </li>
        <li>
        <div className='icons-container'>
          <Link to="/about"><AiOutlineInfo/></Link>
          </div>
        </li>

        <li>
        <div className='icons-container'>
        <Link to='/skills'><MdOutlineWorkspacePremium/></Link>
        </div>
        </li>
        <li>
        <div className='icons-container'>
        <Link to='/projects'><AiOutlineApartment/></Link>
        </div>
        </li>
        <li>
        <div className='icons-container'>
        <Link to='/contact'><AiOutlineContacts/></Link>
        </div>
        </li>
        <li>
          <div className="ss">
         <a href=''>
         <img src={insta} alt="" />   
        </a>
          </div>
        </li>
        <li>
          <div className="ss">
            <a href="">
                <img src={x} alt="" />
            </a>
          </div>
        </li>
        <li>
          <div className="ss">
          <a href="">
                <img src={linkedin} alt="" />
            </a>
          </div>
        </li>
    </div>
  </div>
    </div>
  )
}
