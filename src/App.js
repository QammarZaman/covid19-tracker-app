import './App.css';
import coronoImage from './images/image.png';
import React from 'react';
import { Cards, Chart, CountryPicker } from './Components';
import { GlobalProvider } from './ContextApi';

 

function App() {

  return (
    <div className="container">
      <img src={coronoImage} alt="Corono Logo" />
      <GlobalProvider>
      <Cards />
      <CountryPicker />
      <Chart />
      </GlobalProvider>
      
    </div>
  );
}

export default App;
