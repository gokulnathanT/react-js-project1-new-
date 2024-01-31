import "./heroimg.css";

import React from 'react';
import Introimg from "../assets/batman1.jpg";
import { Link } from "react-router-dom";


const heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
       <img className="intro-img" src={Introimg} alt="batman1"/>
      </div>
      <div className="content">
        <p>Hi,I am Gokulnathan</p>
        <h1>React Project</h1>
        <div>
            <Link to={"/project"} className="btn">Projects</Link>
            <Link to={"/contact"} className="btn btn-light">Contact</Link>
        </div>

      </div>
    </div>
  )
}

export default heroimg
