import { Link } from "react-router-dom";
import "./pricingcard.css";
import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
       <div className="card-container">
        <div className="card">
            <h3>--Basic--</h3>
            <span className="bar"></span>
            <p className="btc">$100</p>
            <p>--3 days--</p>
            <p>--3 Pages--</p>
            <p>--Featured--</p>
            <p>--Responsive Design--</p>
            <Link to="/contact" className="btn"> Purchase Now</Link>
        </div>
        <div className="card">
            <h3>--Premium--</h3>
            <span className="bar"></span>
            <p className="btc">$200</p>
            <p>--4 days--</p>
            <p>--5 Pages--</p>
            <p>--Featured--</p>
            <p>--Responsive Design--</p>
            <Link to="/contact" className="btn"> Purchase Now</Link>
        </div>
        <div className="card">
            <h3>--Business--</h3>
            <span className="bar"></span>
            <p className="btc">$300</p>
            <p>--5 days--</p>
            <p>--7 Pages--</p>
            <p>--Featured--</p>
            <p>--Responsive Design--</p>
            <Link to="/contact" className="btn"> Purchase Now</Link>
        </div>
       </div> 
    </div>
  )
}

export default Pricingcard;
