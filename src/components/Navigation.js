import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-link">
        <i class="fa-solid fa-house"></i>
      </NavLink>
      <NavLink to="/about" className="nav-link">
        <i class="fa-solid fa-face-grin"></i>
      </NavLink>
      <NavLink to='/projects' className="nav-link">
        <i class="fa-solid fa-folder-plus"></i>
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        <i class="fa-solid fa-phone"></i>
      </NavLink>
      <i class="fa-solid fa-bars nav-button"></i>
    </div>
  )
}

export default Navigation
