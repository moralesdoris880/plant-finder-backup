import * as React from 'react';
import Map from 'react-map-gl';
import './App.css';
import SearchBar from './components/SearchBar';
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <div className="App">
      {/* this is a comment */}
      <div id="Map1">
        <SearchBar />
        <Map
        mapLib={import('mapbox-gl')}
        mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdThoeGwxczBod2wyaHBiZnljazd0eXgifQ.F-FdW2qZVJrZZK8J3vI9xA"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 4.0
        }}
        mapStyle="mapbox://styles/moralesdoris880/cltox55sx01rl01qp8w1308hu"
        />;
      </div>
    </div>
  );
}

export default App;
