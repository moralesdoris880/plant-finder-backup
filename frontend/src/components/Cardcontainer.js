import * as React from "react";
const CardContainer = () => {
  return (
    <div className="pageBody">
      <div className="container">
        <div className="card">
          <div className="imgbox">
            <img className="Card-image" src="lavendar.webp" alt="plant"></img>
          </div>
          <div className="content">
            <h1> strawberry </h1>
            <p> scientific_name</p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img className="Card-image" src="lavendar.webp" alt="plant"></img>
          </div>
          <div className="content">
            <h1> lavendar </h1>
            <p> scientific_name</p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img className="Card-image" src="lavendar.webp" alt="plant"></img>
          </div>
          <div className="content">
            <h1> lavendar </h1>
            <p> scientific_name</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContainer;
