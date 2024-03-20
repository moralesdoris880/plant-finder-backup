import '../App.css';
import {NavLink} from "react-router-dom";

function NavBar() {
    return(
        <div id="NavBar">
            <NavLink to="/">
            <h4 id="Logo">PLANTFINDER</h4>
            </NavLink>
            <span class="material-symbols-outlined" id="burger" > menu</span>
            <nav>
                <NavLink to="/about">
                   <p1>about</p1>
                </NavLink>
                <NavLink to="/learnMore">
                    <p1>Learn More</p1>
                </NavLink>
                <NavLink to="/zipCode">
                    <p1>Zip Code</p1>
                </NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;