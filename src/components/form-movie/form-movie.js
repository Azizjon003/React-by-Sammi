import "./form-movie.css";
import { Component } from "react";
class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }
  onAll = (e) => {
    console.log(e.target.name + " " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSave = (e) => {
    e.preventDefault();

    this.props.addMovie(this.state);
    this.setState({
      name: "",
      views: "",
    });
  };
  render() {
    return (
      <form
        className="d-flex justify-content-between align-items-center"
        onSubmit={this.onSave}
      >
        <div>
          <input
            type="text"
            placeholder="Qanday Kino"
            className="p-2 flex-fill"
            onChange={this.onAll}
            name="name"
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Necha marta ko'rilgan"
            className="p-2 flex-fill"
            onChange={this.onAll}
            name="views"
            value={this.state.views}
          />
        </div>
        <button type="submit" className="btn btn-outline-dark flex-fill">
          Saqlash
        </button>
      </form>
    );
  }
}

export default FormMovie;
