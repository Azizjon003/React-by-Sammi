import { Component } from "react";
import "./body.scss";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  UpDown = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");

    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  DownBtn = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");

    // this.setState({ count: this.state.count - 1 });

    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  ResetBtn = (e, data) => {
    e.preventDefault();
    console.log("The link was clicked.");
    console.log(data);
    this.setState((prevState) => ({
      count: 0,
    }));
  };

  render() {
    return (
      <div className="div">
        <form className="formcha">
          <button className="button" onClick={this.UpDown}>
            Up
          </button>
          <button className="button" onClick={this.DownBtn}>
            Down
          </button>
          <button
            className="button"
            onClick={(e) => this.ResetBtn(e, { name: "Jamshid" })}
          >
            Reset
          </button>
        </form>

        <p className="count">Count:{this.state.count}</p>
      </div>
    );
  }
}

export default Body;
