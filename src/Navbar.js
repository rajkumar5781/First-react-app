import React from 'react'

export const Navbar = () => {    
  return (
    <div className='navbar w-full p-1.5    '>
        <a href='#!' className='logo'>F<span>oo</span>diesHub</a>
        <div className='nav-links'>
          <a href='#!'>Home</a>
            <a href='#!'>Recipie</a>
            <a href='#!'>Settings</a>
        </div>
    </div>
  )
}
