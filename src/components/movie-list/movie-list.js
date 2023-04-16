import Card from "../card/card";
import "./movie-list.css";
function MovieList(data) {
  console.log(data);
  return (
    <div className="movieList">
      {data.data.map((item) => (
        <Card name={item.name} views={item.views} favourite={item.favourite} />
      ))}
    </div>
  );
}

export default MovieList;
