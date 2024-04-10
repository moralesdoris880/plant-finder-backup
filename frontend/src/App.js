import * as React from 'react';
import Map from 'react-map-gl';
import './App.css';
import SearchBar from './components/SearchBar';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from 'react';
import PlantContainer from './components/PlantContainer';

function App() {
  const[ plantList, setPlantList ] = useState(null);
  const[ fiveplantslist, setFiveplantslist ] = useState(null);
  const[ fips, setFips ] = useState(0);

  return (
    <div className="App">
      <div id="Map1">
        <SearchBar setFips={setFips}/>
        <Map
        mapLib={import('mapbox-gl')}
        mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdThoeGwxczBod2wyaHBiZnljazd0eXgifQ.F-FdW2qZVJrZZK8J3vI9xA"
        initialViewState={{
          longitude: -76,
          latitude: 42.7,
          zoom: 6.0
        }}
        mapStyle="mapbox://styles/moralesdoris880/cltox55sx01rl01qp8w1308hu"
        />;
        <PlantContainer fiveplantslist={fiveplantslist}/>
      </div>
    </div>
  );
}

export default App;
