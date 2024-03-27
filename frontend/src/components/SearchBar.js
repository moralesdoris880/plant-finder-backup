import '../App.css';

function SearchBar() {
    return(
        <div id="SearchBar">
            <form id="SearchBarInner">
                <input type="text" placeholder='Enter your Zipcode here' id="Searchbox" style={{fontFamily: "Abel"}}/>
                <span class="material-symbols-outlined" id="AdvancedFilters">expand_more</span>
                <span className="material-symbols-outlined" id="searchmag">search</span>
            </form>
            <form id="AdvancedFiltersQuery">
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