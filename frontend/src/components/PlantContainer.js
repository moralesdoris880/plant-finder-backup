import "../PlantContainer.css"

function PlantContainer({fiveplantslist}){
    return(
        <div id="plantcontainerbox">
            <h1 id="searchtitle">Search Results for{}{}</h1>
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
            }):null}
            </div>
            <button><span class="material-symbols-outlined">expand_more</span></button>
        </div>
    )
}

export default PlantContainer;