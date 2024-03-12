import React from 'react';
import { Link } from 'react-router-dom';
import './BoxStyles.css';

function ContactPage() {
  return (
    <div className="box-container">
      <div className="box">
        <div className="box-content">
            <h2>Contact</h2>
          <p> <i>email:</i> luxuryescapes@gmail.com</p>
          <p><i>phone:</i> +40729901766</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
