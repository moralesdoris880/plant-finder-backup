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
            imgSrc: "/annualbluegrass.jpeg"
        },
        {
            WeedTitle: "Bermudagrass",
            imgSrc: "/bermudagrass.jpg"
        },
        {
            WeedTitle: "Crabgrass",
            imgSrc: "/crabgrass.jpeg"
        },
        {
            WeedTitle: "Dallisgrass",
            imgSrc: "/dalligrass.jpeg"
        },
        {
            WeedTitle: "FoxTail",
            imgSrc: "/foxtail.jpeg"
        },
        {
            WeedTitle: "Quackgrass",
            imgSrc: "/quackgrass.jpeg"
        }
    ];
    const BroadleafWeeds = [
        {
            WeedTitle: "Chickweed",
            imgSrc: "/chickweed.jpeg"
        },{
            WeedTitle: "Yarrow",
            imgSrc: "/yarrow.jpeg"
        },{
            WeedTitle: "English Daisy",
            imgSrc: "/englishdaisy.jpeg"
        },{
            WeedTitle: "Dandelion",
            imgSrc: "/dandelion.jpeg"
    }];

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
                        <div><button className='weedSelectionItem' onClick={handleNonNoxious} style={{backgroundColor:displayNonNoxiousWeeds? "#FAFAFA": "#93b767"}}>Grassy Weeds<span class="material-symbols-outlined" id="weedbuttonicon">{displayNonNoxiousWeedsIcon}</span></button></div>
                        <ul className='weedList' style={{display: displayNonNoxiousWeeds? "none": "flex"}}>
                            {   GrassyWeeds.map((weed)=>
                                <li className='weedItem'>
                                    <img className='weedItemImage' src={weed.imgSrc}/>  
                                    <h1 className='weedItemTitle'>{weed.WeedTitle}</h1>                
                                </li>
                            )
                            }
                        </ul>
                        <div><button className='weedSelectionItem' onClick={handleNoxious} style={{backgroundColor:displayNoxiousWeeds? "#FAFAFA": "#93b767"}}>Broadleaf Weeds<span class="material-symbols-outlined" id="weedbuttonicon">{displayNoxiousWeedsIcon}</span></button></div>
                        <ul className='weedList' style={{display: displayNoxiousWeeds? "none": "flex"}}>
                            {   BroadleafWeeds.map((weed)=>
                                <li className='weedItem'>
                                    <img className='weedItemImage' src={weed.imgSrc}/>  
                                    <h1 className='weedItemTitle'>{weed.WeedTitle}</h1>                
                                </li>
                            )
                            }
                        </ul>
                        <div><button className='weedSelectionItem' onClick={handleWeedControlOptions} style={{backgroundColor:displayWeedControlOptions? "#FAFAFA": "#93b767"}}>Weed Control Options<span class="material-symbols-outlined" id="weedbuttonicon">{displayWeedControlOptionsIcon}</span></button></div>
                        <ul id="weedControlList" style={{display: displayWeedControlOptions? "none": "flex"}}>
                            <li>Corn Gluten Herbicide</li>
                            <li>Flamers</li>
                            <li>Pulling Weeds</li>
                            <li>Crowding Plants</li>
                            <li>Glyphosate Herbicide</li>
                            <li>Reproducing Reseeding</li>
                            <li>Cultivating</li>
                            <li>Mulching</li>
                            <li>Digging Weeds</li>
                            <li>Organic Herbicide</li>
                        </ul>
                        <div><button className='weedSelectionItem'><a id="weeda" rel="noreferrer" target="_blank" href='https://www.aphis.usda.gov/sites/default/files/weedlist.pdf'>USDA Federal Noxious Weed List</a></button></div>
                    </ul>
                </div>
                <div className='space'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Weed;