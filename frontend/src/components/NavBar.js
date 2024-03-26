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
            <span class="material-symbols-outlined" id="burger" onClick={handleMenu}>{icon}</span>
            <nav style={{display:icon==="menu"? 'none': 'flex'}}>
                <NavLink to="/about" className="NavLink">ABOUT</NavLink>
                <NavLink to="/learnMore" className="NavLink">LEARN MORE</NavLink>
                <NavLink to="/zipCode" className="NavLink">ZIP CODE</NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;