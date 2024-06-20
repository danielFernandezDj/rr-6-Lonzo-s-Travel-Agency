import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs'
import Packages from './components/Packages'

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>

      <h2>Make your travel dreams come true</h2>
      <div className="contents">
          <AboutUs />
          <Packages />
      </div>
    </div>
  );
}

export default App;
