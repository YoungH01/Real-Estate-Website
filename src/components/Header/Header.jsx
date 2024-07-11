import React, { useState } from 'react'
import logo from '../../assets/image/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import './Header.css'
const Header = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  const getMenuStyles=(menuOpen)=>{
    if(document.documentElement.clientWidth<=900){
      return {display:!menuOpen && "none"}
    }
  }
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img src={logo} alt="" />
        {/* <div className='navbar-menu'>
          <ul className='' style={getMenuStyles(menuOpen)}>
            <li><a href="">Residencies</a></li>
            <li><a href="">Our Value</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Get Started</a></li>
            <li><button>Contact</button></li>
          </ul>
        </div> */}
        <ul className='navbar-menu' style={getMenuStyles(menuOpen)}>
            <li><a href="">Residencies</a></li>
            <li><a href="">Our Value</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Get Started</a></li>
            <li><button>Contact</button></li>
          </ul>
      </div>
      <div className='menu-icon' onClick={()=>{setMenuOpen(prev=>!prev)}}>
        <BiMenuAltRight size={30}/>
      </div>
    </div>
  )
}

export default Header
