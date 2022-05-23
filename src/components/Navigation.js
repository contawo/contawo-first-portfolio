import React, {useRef, useEffect} from 'react';
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
      <i class="fa-solid fa-bars nav-button"></i>
    </div>
  )
}

export default Navigation
