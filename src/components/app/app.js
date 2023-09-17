import "./app.css";
import Title from "../title/title";
import Form from "../form/form";
import Button from "../button/button";
import MovieList from "../movie-list/movie-list";
import { useEffect, useState } from "react";
import Addmovie from "../addmovie/addmovie";
import { v4 as uuidv4 } from "uuid";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           name: "Ertugrul",
//           views: 1000,
//           favourite: true,
//           id: 1,
//         },
//         {
//           name: "Novda",
//           views: 500,
//           favourite: false,
//           id: 2,
//         },
//         {
//           name: "Doktor",
//           views: 200,
//           favourite: false,
//           id: 3,
//         },
//       ],
//     };
//   }
//   onDelete = (id) => {
//     this.setState((prevState) => ({
//       data: prevState.data.filter((item) => item.id !== id),
//     }));
//   };
//   addMovie = (data) => {
//     let newData = {
//       name: data.name,
//       views: data.views,
//       favourite: false,
//       id: uuidv4(),
//     };

//     this.setState((prevState) => ({
//       data: [...prevState.data, newData],
//     }));
//   };
//   render() {
//     const { data } = this.state;
//     return (
//       <div className="main-div container mt-5 text-monospace">
//         <div>
//           <Title />
//         </div>
//         <div className="form-content  mt-5 ">
//           <Form />
//           <Button />
//         </div>
//         <MovieList data={data} onDelete={this.onDelete} />

//         <Addmovie addMovie={this.addMovie} />
//       </div>
//     );
//   }
// }

const App = () => {
  const [data, setData] = useState({
    data: [],
  });

  const onDelete = (id) => {
    setData((prevState) => ({
      data: prevState.data.filter((item) => item.id !== id),
    }));
  };

  const addMovie = (data) => {
    let newData = {
      name: data.name,
      views: data.views,
      favourite: false,
      id: uuidv4(),
    };

    setData((prevState) => ({
      data: [...prevState.data, newData],
    }));
  };

  const length = () => {
    return data.data.length;
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        const newArr = res.map((item) => {
          return {
            name: item.title,
            views: item.id * Math.floor(Math.random() * 100),
            favourite: false,
            id: item.id,
          };
        });

        setData({
          data: newArr,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-div container mt-5 text-monospace">
      <div>
        <Title data={length} />
      </div>
      <div className="form-content  mt-5 ">
        <Form />
        <Button />
      </div>
      <MovieList data={data.data} onDelete={onDelete} />

      <Addmovie addMovie={addMovie} />
    </div>
  );
};

export default App;
