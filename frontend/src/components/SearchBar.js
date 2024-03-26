import '../App.css';

function SearchBar() {
    return(
        <div id="SearchBar">
            <form id="SearchBarInner">
                <input type="text" placeholder='Enter your Zipcode here' id="Searchbox"/>
                <span class="material-symbols-outlined" id="AdvancedFilters">expand_more</span>
                <span className="material-symbols-outlined" id="searchmag">search</span>
            </form>
            <form id="AdvancedFiltersQuery">
                <div>
                    <label>Plant Name</label><input type="text"/>
                    <label>Plant Type</label><select type="text"/>
                    <label>Ecosystem Services</label><select type="text"/>
                    <label>Property Type</label>
                    <input type='radio'/><label>Flood-prone</label>
                    <input type='radio'/><label>Sunlight</label>
                    <input type='radio'/><label>Shade</label>
                    <input type='radio'/><label>Dry</label>
                </div>
            </form>
        </div>
    )
}
  
export default SearchBar;