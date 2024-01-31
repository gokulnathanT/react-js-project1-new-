import React from 'react';
import Navbar from '../components/navbar';
 
import Footer from '../components/footer';
import Heroimg2 from '../components/heroimg2';
import Pricingcard from '../components/pricingcard';
import Work from '../components/work';


const project = () => {
  return <div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
    <Work/>
    <Pricingcard/>
    <Footer/>
     </div>;
};

export default project; 
