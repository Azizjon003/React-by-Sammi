import "./card.css";

function Card({ name, views, favourite }) {
  console.log(favourite);
  return (
    <div
      className={`d-flex justify-content-between align-items-center p-2 mt-2 
    card-container ${favourite ? "favourite" : ""}`}
    >
      <p className="flex-grow-1 m-0">{name}</p>
      <input type="number" defaultValue={views} className="input-card" />
      <div className="d-flex align-items-center ">
        <i className="fas fa-cookie-bite cookie-card"></i>
        <i className="fas fa-trash trash-card "></i>
      </div>
    </div>
  );
}

export default Card;
