import React from 'react';
import './DestinationCard.css';


const DestinationCard = ({ title, description, location, pricePerNight, slots,discount }) => {
  console.log("discount"+discount);
  let discountBool=false;
  let price=0;
  if(discount>0)
  {
    discountBool=true;
    price=pricePerNight-(pricePerNight*discount/100);

  }

  return (
    <div className="destination-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Location:</strong> {location}</p>
     { discountBool  ?  
     <div className='offer'><p><strong>Price/Night with discount:</strong> ${price}</p> </div>: <p><strong>Price/Night:</strong> ${pricePerNight}</p>
}
     
      <p><strong>Slots:</strong> {slots}</p>
    </div>
  );
}

export default DestinationCard;
