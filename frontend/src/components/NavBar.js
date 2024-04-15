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
            <div className='test'>
                <NavLink to="/">
                <h4 id="Logo"><img src="/plant.png" alt="plantlogo" className='navplant' height='30px' width='30px' />PLANT FINDER</h4>
                </NavLink>
            </div>
            <span className="material-symbols-outlined" id="burger" onClick={handleMenu}>{icon}</span>
            <nav style={{display:icon==="menu"? 'none': 'flex'}}>
                <NavLink to="/about" className="NavLink">ABOUT</NavLink>
                <NavLink to="/learnMore" className="NavLink">LEARN MORE</NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;