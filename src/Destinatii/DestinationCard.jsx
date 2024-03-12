import React from 'react';
import './DestinationCard.css';


const DestinationCard = ({ title, description, location, pricePerNight, slots }) => {
  return (
    <div className="destination-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Price/Night:</strong> ${pricePerNight}</p>
      <p><strong>Slots:</strong> {slots}</p>
    </div>
  );
}

export default DestinationCard;
