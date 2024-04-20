import '../App.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";


function NavBar() {
    const[ click, setClick ]= useState(true);
    const[ icon, setIcon ]= useState("menu");
    const[ displayTools, setDisplayTools ] = useState(true);
    const[ displayIcon, setDisplayIcon ] = useState("expand_more")


    function handleMenu() {
        setClick(!click)
        setIcon(click ? "menu": "close")
    }

    function handleDisplayTools(){
        setDisplayTools(!displayTools)
        setDisplayIcon(displayTools ? "expand_less": "expand_more")
    }
   
    return(
        <div id="NavBar">
            <div className='test'>
                <NavLink to="/">
                <h4 id="Logo">PLANT FINDER</h4>
                </NavLink>
            </div>
            <span className="material-symbols-outlined" id="burger" onClick={handleMenu}>{icon}</span>
            <nav style={{display:icon==="menu"? 'none': 'flex'}}>
                <NavLink to="/about" className="NavLink">ABOUT</NavLink>
                <button id="navbarbutton" onClick={handleDisplayTools}>TOOLS<span class="material-symbols-outlined" id="navbarbuttonicon">{displayIcon}</span></button>
                <ul style={{display: displayTools? 'none': 'flex', flexDirection: 'column'}}>
                    <NavLink to="/tools" className="NavLinkTools">Overview</NavLink>
                    <NavLink to="/tools/weed" className="NavLinkTools" >Weed Control</NavLink>
                    <NavLink to="/tools/mulch" className="NavLinkTools" >Mulch Guide</NavLink>
                </ul>
                <NavLink to="/learnMore" className="NavLink">LEARNING CENTER</NavLink>
                <NavLink to="/learnMore" className="NavLink">COMMUNITY</NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;