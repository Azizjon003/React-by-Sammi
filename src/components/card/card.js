import "./card.css";
import { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
    };
  }
  onFavourite = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }));
  };

  render() {
    const { name, views, onDelete } = this.props;

    const { favourite } = this.state;
    return (
      <div
        className={`d-flex justify-content-between align-items-center p-2 mt-2 
    card-container ${favourite ? "favourite" : ""}`}
      >
        <p className="flex-grow-1 m-0">{name}</p>
        <input type="number" defaultValue={views} className="input-card" />
        <div className="d-flex align-items-center ">
          <i
            className="fas fa-cookie-bite cookie-card"
            onClick={this.onFavourite}
          ></i>
          <i className="fas fa-trash trash-card" onClick={onDelete}></i>
        </div>
      </div>
    );
  }
}

export default Card;
