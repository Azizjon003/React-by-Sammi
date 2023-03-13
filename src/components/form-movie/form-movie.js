import "./form-movie.css";

function FormMovie() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <input
          type="text"
          placeholder="Qanday Kino"
          className="p-2 flex-fill"
        />
        <input
          type="number"
          placeholder="Necha marta ko'rilgan"
          className="p-2 flex-fill"
        />
      </div>
      <button className="btn btn-outline-dark flex-fill">Saqlash</button>
    </div>
  );
}

export default FormMovie;
