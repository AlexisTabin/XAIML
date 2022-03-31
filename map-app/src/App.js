import React, { useState } from 'react';
import './App.css';
import data from './dataset_neighborhoods.geo.json'
import GeoComponent from './GeoComponent';

function App() {
  const [property, setProperty] = useState("shape_area");
  return (
    <React.Fragment>
      <h2>Chicago Map</h2>
      <GeoComponent data={data} property={property}></GeoComponent>
      <h2>select your property </h2>
      <select
        value={property}
        onChange={event => setProperty(event.target.value)}>
        <option value="shape_area">area shape</option>
        <option value="shape_len">lenght shape</option>
      </select>


    </React.Fragment>

  );
}

export default App;
