import '../App.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";


function NavBar() {
    const[click,setClick]=useState(true)
    const[icon,setIcon]=useState("menu")
    function handleMenu() {
        setClick(!click)
        if(click===false) {
            setIcon("close");}
        else if(click===true){
            setIcon("menu");
        }
    }
    return(
        <div id="NavBar">
            <NavLink to="/">
            <h4 id="Logo">PLANTFINDER</h4>
            </NavLink>
            <span class="material-symbols-outlined" id="burger" onclick={handleMenu}> {icon}</span>
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