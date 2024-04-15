import * as React from 'react';
import Map from 'react-map-gl';
import './App.css';
import SearchBar from './components/SearchBar';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from 'react';
import PlantContainer from './components/PlantContainer';
import Footer from './components/Footer';
import ZipCode from './pages/ZipCode';

function App() {
  const[ plantList, setPlantList ] = useState([]);
  const[ fiveplantslist, setFiveplantslist ] = useState(null);
  const[ fips, setFips ] = useState(0);
  const[ coordinates, setCoordinates ] = useState(null);
  const[ viewState, setViewState ] = useState({
    longitude: -76,
    latitude: 42.7,
    zoom: 6.0
  })

  // useEffect(()=> {
  //   fetch(`https://plants10.p.rapidapi.com/plants/states?fips_code=US${fips}&limit=8`, { 
  //               method: "GET",
  //               headers: {
  //                 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
  //                 'X-RapidAPI-Host': 'plants10.p.rapidapi.com',
  //                 "Content-Type": "application/json",
  //               }
  //       }).then((response) => {
  //           if (response.ok) {
  //             response.json().then((data) => {
  //               console.log(data)
  //               setPlantList(data.data)})
  //           } else {
  //             response.json().then(() => console.log("Message could not be sent"));
  //           }
  //         })
  // }, [fips]);

  return (
    <div className="App">
      <div id="Map1">
        <SearchBar setFips={setFips} setCoordinates={setCoordinates} />
        <p id="motto">Find your native plants!</p>
        <div id="startimg"/>
        <div id="Map2">
          <Map
          mapLib={import('mapbox-gl')}
          mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdThoeGwxczBod2wyaHBiZnljazd0eXgifQ.F-FdW2qZVJrZZK8J3vI9xA"
          initialViewState={viewState}
          mapStyle="mapbox://styles/moralesdoris880/cltox55sx01rl01qp8w1308hu"
          style={{
            width: "60vw",
            height: 600,
            position: 'relative'
          }}
          />;
          <PlantContainer fiveplantslist={fiveplantslist}/>
        </div>
        <ZipCode plantList={plantList}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
