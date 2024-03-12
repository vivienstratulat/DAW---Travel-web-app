import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import DestinationCard from './DestinationCard';

const DestinationPage = ({ destinations }) => {
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 

  return (
    <div className="destinations-page">
      <h1>Destinations</h1>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} placeholderText="Select start date" />
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} placeholderText="Select end date" />
      <div className="destination-cards">
        {destinations.map((destination, index) => (
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

export default DestinationPage;
