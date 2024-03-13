import * as React from 'react';
import Map from 'react-map-gl';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Map1">
        <Map
        mapLib={import('mapbox-gl')}
        mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdG94ZXJwYTAwNWYybWxjNWViZjRibGwifQ.SfmxhHrBFIoWtPVOzf5hmw"
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
