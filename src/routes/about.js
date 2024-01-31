import React from 'react';
import Navbar from '../components/navbar';
 
import Footer from '../components/footer';
import Heroimg2 from '../components/heroimg2';
import Aboutcontent from '../components/aboutcontent';

const about = () => {
  return <div>
    <Navbar/>
    <Heroimg2 heading="About" text="I am a upcoming developer"/>
    <Aboutcontent/>
  <Footer/>
  </div>;
};

export default about;
