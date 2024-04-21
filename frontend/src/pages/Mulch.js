import '../css/Mulch.css';
import Footer from '../components/Footer';

function Mulch(){
    return(
        <div>
            <div id="mulchContainer">
                <div className='space'></div>
                <div id="mulchContent">
                    <h1 id="mulchTitle">Mulch Guide</h1>
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
                        <h2>Benefits of Mulch</h2>
                    </div>
                    <div>
                        <h2>Color Selection</h2>
                    </div>
                    <div>
                        <h2>Mulch Calculator</h2>
                    </div>
                </div>
                <div className='space'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Mulch;