
import React from 'react';

import Mission from '../src/Pages/Mission';
import About from '../src/Pages/About';
import Appointment from '../src/Pages/Appointments';
import Products from '../src/Pages/Products';
import './styles.css'; // Make sure to import your CSS file
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div>
      <Navbar />
      
      <LandingPage />
      <Mission />
      <About />
      <Products />
      <Appointment />
    </div>
  );
}

export default App;
