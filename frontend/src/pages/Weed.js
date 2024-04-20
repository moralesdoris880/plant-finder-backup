import Footer from '../components/Footer';
import '../css/Weed.css';
import { useState } from 'react';

function Weed(){
    const [ displayNonNoxiousWeeds, setDisplayNonNoxiousWeeds ] = useState(true);
    const [ displayNoxiousWeeds, setDisplayNoxiousWeeds ] = useState(true);
    const [ displayWeedControlOptions, setDisplayWeedControlOptions ] = useState(true);
    const [ displayNonNoxiousWeedsIcon, setDisplayNonNoxiousWeedsIcon ] = useState("expand_more");
    const [ displayNoxiousWeedsIcon, setDisplayNoxiousWeedsIcon ] = useState("expand_more");
    const [ displayWeedControlOptionsIcon, setDisplayWeedControlOptionsIcon ] = useState("expand_more");
    const GrassyWeeds = [
        {
            WeedTitle: "Annual Bluegrass",
            imgSrc: ""
        },
        {
            WeedTitle: "Bermudagrass",
            imgSrc: ""
        },
        {
            WeedTitle: "Crabgrass",
            imgSrc: ""
        },
        {
            WeedTitle: "Dallisgrass",
            imgSrc: ""
        },
        {
            WeedTitle: "FoxTail",
            imgSrc: ""
        },
        {
            WeedTitle: "Quackgrass",
            imgSrc: ""
        }
    ]

    function handleNonNoxious(){
        setDisplayNonNoxiousWeeds(!displayNonNoxiousWeeds)
        displayNonNoxiousWeedsIcon === "expand_more" ? setDisplayNonNoxiousWeedsIcon("expand_less") : setDisplayNonNoxiousWeedsIcon("expand_more")
    }

    function handleNoxious(){
        setDisplayNoxiousWeeds(!displayNoxiousWeeds)
        displayNoxiousWeedsIcon === "expand_more" ? setDisplayNoxiousWeedsIcon("expand_less") : setDisplayNoxiousWeedsIcon("expand_more")
    }

    function handleWeedControlOptions(){
        setDisplayWeedControlOptions(!displayWeedControlOptions)
        displayWeedControlOptionsIcon === "expand_more" ? setDisplayWeedControlOptionsIcon("expand_less") : setDisplayWeedControlOptionsIcon("expand_more")
    }

    return(
        <div>
            <div id="WeedContainer">
                <div className='space'></div>
                <div id="weedContent">
                    <h1 id="weedTitle">Weed Control Center</h1>
                    <p id="weedSlogan">Top 10 Common Weeds and how to prevent them</p>
                    <ul id="weedSelection">
                        <div><button className='weedSelectionItem' onClick={handleNonNoxious}>Grassy Weeds<span class="material-symbols-outlined" id="weedbuttonicon">{displayNonNoxiousWeedsIcon}</span></button></div>
                        <ul className='weedList' style={{display: displayNonNoxiousWeeds? "none": "flex"}}>
                            {   GrassyWeeds.map((weed)=>
                                <li className='weedItem'>
                                    <img className='weedItemImage'/>  
                                    <h1 className='weedItemTitle'>{weed.WeedTitle}</h1>                
                                </li>
                            )
                            }
                        </ul>
                        <div><button className='weedSelectionItem' onClick={handleNoxious}>Broadleaf Weeds<span class="material-symbols-outlined" id="weedbuttonicon">{displayNoxiousWeedsIcon}</span></button></div>
                        {/* <div className='weedList'>
                                
                        </div> */}
                        <div><button className='weedSelectionItem' onClick={handleWeedControlOptions}>Weed Control Options<span class="material-symbols-outlined" id="weedbuttonicon">{displayWeedControlOptionsIcon}</span></button></div>
                        <div><button className='weedSelectionItem'><a id="weeda" target="_blank" href='https://www.aphis.usda.gov/sites/default/files/weedlist.pdf'>USDA Federal Noxious Weed List</a></button></div>
                    </ul>
                </div>
                <div className='space'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Weed;