import "../css/ZipCode.css";

function ZipCode({plantList}) {
  return (
    <div id="CardContainer">
      {plantList.length > 0  ? <h1 className="CardHeader">Native Plants in Your Area</h1>: null }
      <div className="CardSet">
        {plantList.length > 0  ? plantList.map((plant)=>{ 
          return(
            <div className="Card">
              <h10>{` ${plant.common_name===null?plant.scientific_name:plant.common_name}`}</h10>
              <br/> 
              <br/>
              <img
                className="Card-image"
                src="lavendar.webp"
                alt="plant"
              ></img>
              <br/>
              <p className="Card-text"> <bold>Scientfic Name:</bold>{` ${plant.scientific_name}`}</p>
              <p className="Card-text"> <bold>Plant Symbol:</bold>{` ${plant.symbol}`}</p>
            </div>)
        }): null }
      </div>
    </div>
  );
}
export default ZipCode;
