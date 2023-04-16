import "./app.css";
import Title from "../title/title";
import Form from "../form/form";
import Button from "../button/button";
import MovieList from "../movie-list/movie-list";
import Addmovie from "../addmovie/addmovie";

const App = () => {
  const data = [
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
  ];
  return (
    <div className="main-div container mt-5 text-monospace">
      <div>
        <Title />
      </div>
      <div className="form-content  mt-5 ">
        <Form />
        <Button />
      </div>
      <MovieList data={data} />

      <Addmovie />
    </div>
  );
};

export default App;
