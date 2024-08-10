// LinkedInIcon.js
import React from 'react';
import { FaMailBulk} from 'react-icons/fa';

function Mail() {
  return (
    <a href="mailto:mailtogokul1727@gmail.com" target="_blank" rel="noopener noreferrer">
      <FaMailBulk size={30} style={{ color: "#fff", marginRight: "1rem" }} />
    </a> 
  );
}

export default Mail;
