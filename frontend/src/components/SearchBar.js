import '../App.css';
import { useState } from 'react';

function SearchBar({setFips, searchQuery, setSearchQuery, setLaatitude, setLoongitude}) {
    const[click,setClick]=useState(true);

    function ZipcodetoFIPSConversion(e,searchQuery){
        e.preventDefault();	     
        fetch(`https://us-zip-code-lookup.p.rapidapi.com/getZip?zip=${searchQuery}`, { 
                method: "GET",
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                  'X-RapidAPI-Host': 'us-zip-code-lookup.p.rapidapi.com',
                  "Content-Type": "application/json",
                }
        }).then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                console.log(data)
                setLaatitude(data.Data[0].ZipLatitude)
                setLoongitude(data.Data[0].ZipLongitude)
                setFips(data.Data[0].StateFIPS)})
            } else {
              response.json().then(() => console.log("Message could not be sent"));
            }
          })
    }

    function handleAdvancedFilters(){
        setClick(!click)
    }

    return(
        <div id="SearchBar">
            <form id="SearchBarInner" onSubmit={(e)=>ZipcodetoFIPSConversion(e,searchQuery)}>
                <input type="text" placeholder='  Enter your Zipcode here' id="Searchbox" style={{fontFamily: "Abel"}} onChange={(e)=>setSearchQuery(e.target.value)}/>
                {/* <span className="material-symbols-outlined" id="AdvancedFilters" onClick={handleAdvancedFilters}>expand_more</span> */}
                <div>
                    <span className="material-symbols-outlined" id="searchmag">search</span>
                    <input type="submit" value=""  id="searchmagsubmit"></input>
                </div>
            </form>
            <form id="AdvancedFiltersQuery" style={{display:click?"none":"block"}}>
                    <label style={{fontFamily: "Abel"}}>Plant Name</label><br/>
                    <input type="text"className='AdvancedFilterInputs'/><br/>
                    <label style={{fontFamily: "Abel"}}>Plant Type</label><br/>
                    <select type="text"className='AdvancedFilterInputs'/><br/>
                    <label style={{fontFamily: "Abel"}}>Ecosystem Services</label><br/>
                    <select type="text" className='AdvancedFilterInputs'/><br/>
                    <label style={{fontFamily: "Abel", marginBottom:"10px"}}>Property Type</label><br/>
                    <input type='radio'/><label style={{fontFamily: "Abel"}}>Flood-prone</label>
                    <input type='radio'/><label style={{fontFamily: "Abel"}}>Sunlight</label><br/>
                    <input type='radio'/><label style={{fontFamily: "Abel"}}>Shade</label>
                    <input type='radio'/><label style={{fontFamily: "Abel"}}>Dry</label><br/>
                    <input type="submit" value="Apply Filters" id='SearchBarSubmit' style={{marginTop:"10px"}}/>
            </form>
        </div>
    )
}
  
export default SearchBar;