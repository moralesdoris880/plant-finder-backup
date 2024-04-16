import "../PlantContainer.css"

function PlantContainer({fiveplantslist, searchQuery}){
    return(
        <div id="plantcontainerbox">
            <h1 id="searchtitle">Search Results for {searchQuery}</h1>
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
            <button id="more"><span class="material-symbols-outlined" style={{color:"#28180E",fontSize:"32px"}}>expand_more</span></button>
        </div>
    )
}

export default PlantContainer;