import "./workcard.css";
 import React from 'react';

import { NavLink } from "react-router-dom";
 
 const Workcard = (props) => {
   return (
    <div className="project-card">
    <img src={props.imgsrc} alt="img" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <p>{props.tech}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn" target="_blank">VIEW</NavLink>
            <NavLink to={props.source} className="btn" target="_blank">SOURCE</NavLink>
        </div>
    </div>
</div>
   )
 }
 
 export default Workcard
 