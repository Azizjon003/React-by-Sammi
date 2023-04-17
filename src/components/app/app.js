import "./app.css";
import Title from "../title/title";
import Form from "../form/form";
import Button from "../button/button";
import MovieList from "../movie-list/movie-list";
import { Component } from "react";
import Addmovie from "../addmovie/addmovie";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Ertugrul",
          views: 1000,
          favourite: true,
          id: 1,
        },
        {
          name: "Novda",
          views: 500,
          favourite: false,
          id: 2,
        },
        {
          name: "Doktor",
          views: 200,
          favourite: false,
          id: 3,
        },
      ],
    };
  }
  onDelete = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((item) => item.id !== id),
    }));
  };
  addMovie = (e, data) => {
    e.preventDefault();
    let newData = {
      name: data.name,
      views: data.views,
      favourite: false,
      id: uuidv4(),
    };

    this.setState((prevState) => ({
      data: [...prevState.data, newData],
    }));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="main-div container mt-5 text-monospace">
        <div>
          <Title />
        </div>
        <div className="form-content  mt-5 ">
          <Form />
          <Button />
        </div>
        <MovieList data={data} onDelete={this.onDelete} />

        <Addmovie addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
