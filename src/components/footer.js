import "./footer.css";
import React from 'react';
import LinkedIn from "./linkedin";

import{FaFacebook, FaHome, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>  
                  <div>
                    <p>Coimbatore,TN</p>
                    <p>India.</p>
                  </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>6374311727</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>Mailtogokul727@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About me
                </h4>
                <p>
                    This is me Gokulnathan , 
                    Developer of this page and It was done using react js.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <LinkedIn/>
               
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
