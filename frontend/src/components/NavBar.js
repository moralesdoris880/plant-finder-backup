import '../App.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";


function NavBar() {
    const[ click, setClick ]= useState(true);
    const[ icon, setIcon ]= useState("menu");
    const[ displayTools, setDisplayTools ] = useState(true);
    const[ displayAbout, setDisplayAbout ] = useState(true);
    const[ displayLearning, setDisplayLearning ] = useState(true);
    const[ displayIcon, setDisplayIcon ] = useState("expand_more")


    function handleMenu() {
        setClick(!click)
        setIcon(click ? "menu": "close")
    }

    function handleDisplayTools(){
        setDisplayTools(!displayTools)
        setDisplayIcon(displayTools ? "expand_less": "expand_more")
    }

    function handleDisplayAbout(){
        setDisplayAbout(!displayAbout)
        setDisplayIcon(displayAbout ? "expand_less": "expand_more")
    }

    function handleDisplayLearning(){
        setDisplayLearning(!displayLearning)
        setDisplayIcon(displayLearning ? "expand_less": "expand_more")
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
                <button id="navbarbutton" onClick={handleDisplayAbout}>ABOUT<span class="material-symbols-outlined" id="navbarbuttonicon">{displayIcon}</span></button>
                <ul style={{display: displayAbout? 'none': 'flex', flexDirection: 'column'}}>
                    <NavLink to="/about" className="NavLinkAbout">About PlantFinder </NavLink>
                    <NavLink to="/about/MeetDevelopers" className="NavLinkAbout" >Meet Developers</NavLink>
                    <NavLink to="/about/Contact" className="NavLinkAbout" >Contact Us</NavLink>
                </ul>
                <button id="navbarbutton" onClick={handleDisplayTools}>TOOLS<span class="material-symbols-outlined" id="navbarbuttonicon">{displayIcon}</span></button>
                <ul style={{display: displayTools? 'none': 'flex', flexDirection: 'column'}}>
                    <NavLink to="/tools" className="NavLinkTools">Overview</NavLink>
                    <NavLink to="/tools/weed" className="NavLinkTools" >Weed Control</NavLink>
                    <NavLink to="/tools/mulch" className="NavLinkTools" >Mulch Guide</NavLink>
                </ul>                <button id="navbarbutton" onClick={handleDisplayLearning}>LEARNING CENTER<span class="material-symbols-outlined" id="navbarbuttonicon">{displayIcon}</span></button>
                <ul style={{display: displayLearning? 'none': 'flex', flexDirection: 'column'}}>
                    <NavLink to="/learnMore" className="NavLinkLearning">Learn More </NavLink>
                    <NavLink to="/learnMore/faq" className="NavLinkLearning" >FAQ</NavLink>
                    <NavLink to="/learnMore/resources" className="NavLinkLearning" >Resources</NavLink>
                </ul>
                <NavLink to="/learnMore" className="NavLink">COMMUNITY</NavLink>
            </nav>
        </div>
    )
}
  
export default NavBar;