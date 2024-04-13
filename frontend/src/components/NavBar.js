import '../App.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";


function NavBar() {
    const[click,setClick]=useState(true)
    const[icon,setIcon]=useState("menu")


    function handleMenu() {
        setClick(!click)
        setIcon(click ? "menu": "close")
    }
   
    return(
        <div id="NavBar">
            <NavLink to="/">
            <h4 id="Logo">PLANTFINDER</h4>
            <img src="/plant.png" alt="plantlogo"  className='navplant' height='40px' width='40px' margin= '0 auto' />
            </NavLink>
            <span className="material-symbols-outlined" id="burger" onClick={handleMenu}>{icon}</span>
            <nav style={{display:icon==="menu"? 'none': 'flex'}}>
                <NavLink to="/about" className="NavLink">ABOUT</NavLink>
                <NavLink to="/learnMore" className="NavLink">LEARN MORE</NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;