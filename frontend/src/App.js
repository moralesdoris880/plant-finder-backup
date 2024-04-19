import * as React from 'react';
import Map, { Layer, NavigationControl } from 'react-map-gl';
import { FillLayer } from 'react-map-gl';
import './App.css';
import SearchBar from './components/SearchBar';
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from 'react';
import PlantContainer from './components/PlantContainer';
import Footer from './components/Footer';
import ZipCode from './pages/ZipCode'; 

function App() {
  const[ plantList, setPlantList ] = useState([]);
  const[ fiveplantslist, setFiveplantslist ] = useState([]);
  const[ fips, setFips ] = useState(0);
  const[ loongitude, setLoongitude ] = useState("-76");
  const[ laatitude, setLaatitude ] = useState("42.7");
  const[ searchQuery, setSearchQuery ]=useState("");
  const[ plantHardinessZone, setPlantHardinessZone ] = useState()
  const [viewState, setViewState] = useState({
    longitude: parseFloat(loongitude),
    latitude: parseFloat(laatitude),
    zoom: 3.5
  });

  // useEffect(()=> {
  //   fetch(`https://plants10.p.rapidapi.com/plants/states?fips_code=US${fips}&details?&limit=8`, { 
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
  //               setPlantList(data.data)
  //               console.log(plantList)
  //               setFiveplantslist(data.data.slice(0,4))
  //             })
  //           } else {
  //             response.json().then(() => console.log("Message could not be sent"));
  //           }
  //         })
  // }, [fips]);

  // useEffect(()=> {
  //   fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${searchQuery}`, { 
  //               method: "GET",
  //               headers: {
  //                 'X-RapidAPI-Key': process.env.REACT_APP_KEY,
  //                 'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
  //                 "Content-Type": "application/json",
  //               }
  //       }).then((response) => {
  //           if (response.ok) {
  //             response.json().then((data) => {
  //               setPlantHardinessZone(data.hardiness_zone)
  //             })
  //           } else {
  //             response.json().then(() => console.log("Plant Hardiness could not be sent"));
  //           }
  //         })
  // }, [ setFips ]);


  return (
    <div className="App">
      <div id="Map1">
        <SearchBar setFips={setFips} setLaatitude={setLaatitude} setLoongitude={setLoongitude} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <p id="motto">Find your native plants!</p>
        <div id="startimg"/>
        <div id="Map2">
          <Map
            mapLib={import('mapbox-gl')}
            mapboxAccessToken="pk.eyJ1IjoibW9yYWxlc2RvcmlzODgwIiwiYSI6ImNsdThoeGwxczBod2wyaHBiZnljazd0eXgifQ.F-FdW2qZVJrZZK8J3vI9xA"
            initialViewState={{
              longitude: -76,
              latitude: 42.7,
              zoom: 6.0
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{
              width: "60vw",
              height: 600,
              position: 'relative'
            }}
            viewState={{
              longitude: loongitude,
              latitude: laatitude,
              zoom: 15.0
            }}>
            <NavigationControl/>
          </Map>
          <PlantContainer plantHardinessZone={plantHardinessZone} fiveplantslist={fiveplantslist} searchQuery={searchQuery}/>
        </div>
        <ZipCode plantList={plantList}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
