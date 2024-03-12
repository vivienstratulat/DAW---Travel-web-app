import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import DestinationCard from './DestinationCard';

const Oferte = ({ destinations }) => {
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 
  const destinationsWithDiscount = destinations.filter(destination => destination.discount > 0);

  return (
    <div className="destinations-page">
      <h1>Destinations with discount</h1>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} placeholderText="Select start date" />
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} placeholderText="Select end date" />
      <div className="destination-cards">
        {destinationsWithDiscount.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            location={destination.location}
            pricePerNight={destination.pricePerNight}
            slots={destination.slots}
            discount={destination.discount}
          />
        ))}
      </div>
    </div>
  );
}

export default Oferte;
