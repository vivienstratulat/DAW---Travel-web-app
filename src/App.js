import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DestinationsPage from './Destinatii/DestinationPage';
import ContactPage from './ContactPage';
import Oferte from './Destinatii/Oferte';
function App() {

  const destinations = [
    {
      title: 'Destination 1',
      description: 'Description of Destination 1',
      location: 'Location 1',
      pricePerNight: 100,
      slots: 5
    },
    {
      title: 'Destination 2',
      description: 'Description of Destination 2',
      location: 'Location 2',
      pricePerNight: 120,
      slots: 3
    },
    {
      title: 'Destination 3',
      description: 'Description of Destination 3',
      location: 'Location 3',
      pricePerNight: 70,
      slots: 6
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage destinations={destinations} />} /> 
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offers" element={<Oferte destinations={destinations} />} />
      </Routes>
    </Router>
  );
}

export default App;
