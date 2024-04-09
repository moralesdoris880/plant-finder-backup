function Card() {
  return (
    <div className="Card">

      <h2> plant type </h2>
      <img
        className="Card-image"
        src="lavendar.webp"
        alt="plant"
      ></img>
      <br/>
      <p className="Card-text">
        plant description: Strawberry level: intermidete experince reccomended
        scientfic name: Fragaria x ananassa
      </p>
    </div>
  );
}
export default Card;
