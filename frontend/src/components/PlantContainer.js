import "../PlantContainer.css"

function PlantContainer({fiveplantslist}){
    return(
        <div id="plantcontainerbox">
            <h1 id="searchtitle">Search Results for{}{}</h1>
            <div>
            {fiveplantslist.length > 0  ? fiveplantslist.map((plant)=>{
                return(
                <div>
                    {/* <img /> */}
                    <div>
                        <h1>{plant.common_name}</h1>
                        <p>Scientific Name:{plant.scientific_name}</p>
                        <p>{plant.symbol}</p>
                    </div>
                </div>)
            }):null}
            </div>
            <button><span class="material-symbols-outlined">expand_more</span></button>
        </div>
    )
}

export default PlantContainer;