import '../css/Mulch.css';
import { useState } from 'react';
import Footer from '../components/Footer';

function Mulch(){
    const [ displayMulchColorInfo, setDisplayMulchColorInfo ] = useState(true);
    const [ mulchInfo, setMulchInfo ] = useState([]);
    const colorMeaning = [
        {
            color: "black",
            fact1: "Captures the Sun's UV rays and retains the heat.",
            fact2: "Weed Growth Prevention.",
            fact3: "Suggested in cooler climates or early planting."
        },{
            color: "red",
            fact1: "Provides the soil with nutrients.",
            fact2: "Retains water moisture.",
        },{
            color: "brown",
            fact1: "Good insulation for plant roots.",
            fact2: "Retains water moisture.",
            fact3: "Provides the soil with nutrients."
        },{
            color: "natural",
            fact1: "Provides plant growth and soil with nutrients.",
            fact2: "Slower decomposition.",
            fact3: "Regulates soil temperature."
        }
    ]

    function handleColorChange(e){
        setMulchInfo(colorMeaning.find((item)=> item.color === e))
        setDisplayMulchColorInfo(!displayMulchColorInfo)
        console.log(mulchInfo.color)
    }

    return(
        <div>
            <div id="mulchContainer">
                <div className='space'></div>
                <div id="mulchContent">
                    <h1 id="mulchTitle">Mulch Guide</h1>
                    <p id="weedSlogan">Take a look at the different mulch types, benefits, and calculator</p>
                    <div id="mulchInfoTable">
                        <div className='infoBox'>
                            <h2>Organic Mulch</h2>
                            <div id="infoContent">
                                <img src="/msu.jpeg" id="mulchImg" alt="a pair of hands holding mulch"/>
                                <ul id="infoList">
                                    <li className="infoItem">Leaf Mulch</li>
                                    <li className="infoItem">Triple Ground Mulch</li>
                                    <li className="infoItem">Wood Chips</li>
                                    <li className="infoItem">Husk, Pine Mulch</li>
                                    <li className="infoItem">Sheet Mulch</li>
                                    <li className="infoItem">Green Mulch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="mulchInfoTable">
                        <div className='infoBox'>
                            <h2>Inorganic Mulch</h2>
                            <div id="infoContent">
                                <img src="/stonemulch.jpeg" id="stoneImg" alt="a hand holding small rocks"/>
                                <ul id="infoList">
                                    <li className="infoItem">Stone Mulch</li>
                                    <li className="infoItem">Plastic/Dyed Mulch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="benefitsmulchtitle">Benefits of Mulch</h2>
                        <div id="line2"></div>
                        <div id="mulchbenefitList">
                            <li className='mulchbenefitItem'>
                                <h2 className='mulchbenefitTitle'>Nourishes Soil</h2>
                                <p>As Organic Mulch decomposes, it nourishes the soil and feeds your plants over time.</p>
                            </li>
                            <li className='mulchbenefitItem'>
                                <h2 className='mulchbenefitTitle'>Surpressing Weeds</h2>
                                <p>Mulch cuts weed seeds from sunlight. Prevents them from growing enough to break the surface.</p>
                            </li>
                            <li className='mulchbenefitItem'>
                                <h2 className='mulchbenefitTitle'>Water Conservation</h2>
                                <p>Helps soil retain water moisture and lowering amount of watering needed in the plant bed.</p>
                            </li>
                            <li className='mulchbenefitItem'>
                                <h2 className='mulchbenefitTitle'>Regulates Temperature</h2>
                                <p>Mulch insulates your plants' root systems against the sun and extreme temperature variations.</p>
                            </li>
                            <li className='mulchbenefitItem'>
                                <h2 className='mulchbenefitTitle'>Erosion Prevention</h2>
                                <p>First defense against nature and prevents wear down of the soil.</p>
                            </li>
                        </div>
                    </div>
                    <div>
                        <h2 className="benefitsmulchtitle">Color Selection</h2>
                        <div id="line2"></div>
                        <div id="colorList">
                            <li className='circleColor' id="black" onClick={()=>handleColorChange("black")}>
                                <p className='circleText'>Black</p>
                            </li>
                            <li className='circleColor' id="red" onClick={()=>handleColorChange("red")}>
                                <p className='circleText'>Red</p>
                            </li>
                            <li className='circleColor' id="brown" onClick={()=>handleColorChange("brown")}>
                                <p className='circleText'>Brown</p>
                            </li>
                            <li className='circleColor' id="natural" onClick={()=>handleColorChange("natural")}>
                                <p className='circleText'>Natural</p>
                            </li>
                        </div>
                        <div style={{display: displayMulchColorInfo? "none":"flex"}} id="mulchInfo">
                            <h2>{mulchInfo? mulchInfo.color.toUpperCase(): null}</h2>
                            <p>{mulchInfo? mulchInfo.fact1: null}</p>
                            <p>{mulchInfo? mulchInfo.fact2: null}</p>
                            <p>{mulchInfo? mulchInfo.fact3: null}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="benefitsmulchtitle">Mulch Calculator</h2>
                        <form>
                            <label></label>
                            <input></input>
                        </form>
                    </div>
                </div>
                <div className='space'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Mulch;