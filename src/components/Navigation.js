import React, {useRef, useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navigation = () => {
  //~ Getting Element from the DOM
  let home = useRef(null)
  let about = useRef(null)
  let project = useRef(null)
  let contact = useRef(null)

  //* Animation with gsap
  useEffect(() => {
    //^ From
    //^ To
    gsap.from(home, { rotation: "+=360" });
    gsap.from(about, { rotation: "+=360" });
    gsap.from(project, { rotation: "+=360" });
    gsap.from(contact, { rotation: "+=360" });
  }, [])

  const [condition, setCondition] = useState(false);

  return (
    <div className="nav">
        <NavLink 
          to="/" className="nav-link"
          ref={el => home = el}>
            <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink 
          to="/about" className="nav-link"
          ref={el => about = el}>
            <i class="fa-solid fa-face-grin"></i>
        </NavLink>
        <NavLink 
          to='/projects' className="nav-link"
          ref={el => project = el}>
            <i class="fa-solid fa-folder-plus"></i>
        </NavLink>
        <NavLink 
          to="/contact" className="nav-link"
          ref={el => contact = el}>
            <i class="fa-solid fa-phone"></i>
        </NavLink>
        <i 
          class="fa-solid fa-bars nav-button"
          onClick={() => {setCondition(true)}}></i>
        {condition ? (
            <div className="mobileNavigation">
              {/* <div className="mobile-exit-button"
                onClick={() => {setCondition(false)}}><i class="fa-solid fa-person-walking-arrow-right"></i></div> */}
              <div className="mobileNavLinks">
                <NavLink 
                  onClick={() => {setCondition(false)}} 
                  to='/' 
                  className='mobileNavLink'>Home</NavLink> 
                <NavLink 
                  onClick={() => {setCondition(false)}} 
                  to='/about'
                  className='mobileNavLink'>About</NavLink> 
                <NavLink 
                  onClick={() => {setCondition(false)}} 
                  to='/projects'
                  className='mobileNavLink'>Projects</NavLink> 
                <NavLink 
                  onClick={() => {setCondition(false)}} 
                  to='/contact'
                  className='mobileNavLink'>Contact</NavLink>
              </div>
            </div>
        ): <></>}
    </div>
  )
}

export default Navigation
