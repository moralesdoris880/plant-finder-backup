import "../PlantContainer.css"

function PlantContainer(fiveplantslist){
    return(
        <div id="plantcontainerbox">
            <h1 id="searchtitle">Search Results for{}{}</h1>
            <button><span class="material-symbols-outlined">add</span></button>
        </div>
    )
}

export default PlantContainer;