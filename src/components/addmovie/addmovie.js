import FormMovie from "../form-movie/form-movie";
import "./addmovie.css";

function Addmovie({ addMovie }) {
  return (
    <div className="add-movie">
      <h1 className="uppercase h3 title-movie">Yangi Kino qo'shish</h1>
      <FormMovie addMovie={addMovie} />
    </div>
  );
}

export default Addmovie;
