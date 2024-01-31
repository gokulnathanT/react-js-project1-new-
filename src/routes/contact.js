import React from 'react';
import Navbar from '../components/navbar';
 
import Footer from '../components/footer';
import Heroimg2 from '../components/heroimg2';
import Form from '../components/form';

const contact = () => {
  return <div>
  <Navbar/>
  <Heroimg2 heading="Contact" text="let's connect for a while"/>
  <Form/>
  <Footer/>

  </div>;
};

export default contact;
