import "../PlantContainer.css"
/*
function PlantImage(plantName){
    fetch(`https://trefle.io/api/v1/plants?token=4eRwCaJtCTZ3V3Sxxrbs_MfUCIDegzDarZ5T_HhGOcQ&filter[scientific_name]=${plant.scientific_name}`, { 
            method: "GET",
    }).then((response) => {
        if (response.ok) {
          response.json().then((Data) => {
            console.log(Data)
            return(Data.data[0].image_URL)})
        } else {
          response.json().then(() => console.log("Message could not be sent"));
        }
      })
}
*/
function PlantContainer({fiveplantslist, searchQuery, plantHardinessZone}){
    return(
        <div id="plantcontainerbox">
            <h1 className="searchtitle">Search Results for {searchQuery}</h1>
            <h1 className="searchtitle">Plant Hardiness Zone: {plantHardinessZone}</h1>
            <div id="plantcontainerlist">
            {fiveplantslist.length > 0  ? fiveplantslist.map((plant)=>{
                return(
                <div className="plantdetailbox">
                    <img className="plantimage" src="./imagenotfound.jpeg"/>
                    <div className="plantcontent">
                        <h1 className="planttitle">{plant.common_name}</h1>
                        <p className="plantsn">Scientific Name: {plant.scientific_name}</p>
                        <p className="plantsymbol">Symbol: {plant.symbol}</p>
                    </div>
                </div>)
            }):<div>
                    <h1 id="noresults">No Results found!</h1>
                    <p id="tryagain">Please try again</p>
                </div>
            }
            </div>
            <button id="more"><span className="material-symbols-outlined" style={{color:"#28180E",fontSize:"32px"}}>expand_more</span></button>
        </div>
    )
}

export default PlantContainer;
