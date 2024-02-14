import React from 'react'

export const Navbar = () => {
    const myInlineStyles = {
      };
    
  return (
    <div style={myInlineStyles} className='navbar container'>
        {/* <img src='./images/react-logo.svg' alt='' width="30" height="40" style={{paddingLeft:'10px'}}></img>
        <img src='./images/search-icon.svg' alt='' width="30" height="40" style={{paddingRight:'20px'}} onClick=""></img> */}
        <a href='#!' className='logo'>F<span>oo</span>diesHub</a>
        <div className='nav-links'>
            <a href='#!'>Home</a>
            <a href='#!'>Recipie</a>
            <a href='#!'>Settings</a>
        </div>
    </div>
  )
}
