import '../App.css';

function SearchBar() {
    return(
        <div id="SearchBar">
            <form id="SearchBarInner">
                    <input type="text" placeholder='Enter your Zipcode here' id="Searchbox"/>
                    <span className="material-symbols-outlined" id="searchmag">search</span>
            </form>
        </div>
    )
}
  
export default SearchBar;