import "./app.css";
import Title from "../title/title";
import Form from "../form/form";
import Button from "../button/button";
import MovieList from "../movie-list/movie-list";
import Addmovie from "../addmovie/addmovie";
const App = () => {
  return (
    <div className="main-div container mt-5 text-monospace">
      <div>
        <Title />
      </div>
      <div className="form-content  mt-5 ">
        <Form />
        <Button />
      </div>
      <MovieList />

      <Addmovie />
    </div>
  );
};

export default App;
