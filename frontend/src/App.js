import * as React from 'react';
import Map from 'react-map-gl';
import './App.css';
import SearchBar from './components/SearchBar';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from 'react';
import PlantContainer from './components/PlantContainer';
import Footer from './components/Footer';
import ZipCode from './pages/ZipCode';

function App() {
  const[ plantList, setPlantList ] = useState(null);
  const[ fiveplantslist, setFiveplantslist ] = useState(null);
  const[ fips, setFips ] = useState(0);
  const[ coordinates, setCoordinates ] = useState(null);
  const[ viewState, setViewState ] = useState({
    longitude: -76,
    latitude: 42.7,
    zoom: 6.0
  })

  return (
    <div className="App">
      <div id="Map1">
        <SearchBar setFips={setFips} setCoordinates={setCoordinates} />
        <Map
        mapLib={import('mapbox-gl')}
        mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdThoeGwxczBod2wyaHBiZnljazd0eXgifQ.F-FdW2qZVJrZZK8J3vI9xA"
        initialViewState={viewState}
        mapStyle="mapbox://styles/moralesdoris880/cltox55sx01rl01qp8w1308hu"
        />;
        <PlantContainer fiveplantslist={fiveplantslist}/>
        <ZipCode />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
