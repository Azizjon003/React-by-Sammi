import Card from "../card/card";
import "./movie-list.css";
function MovieList(data) {
  return (
    <div className="movieList">
      {data.data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          views={item.views}
          favourite={item.favourite}
          onDelete={() => data.onDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default MovieList;
