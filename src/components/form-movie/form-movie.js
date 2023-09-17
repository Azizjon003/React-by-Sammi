import "./form-movie.css";
import { useState } from "react";
// class FormMovie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       views: "",
//     };
//   }
//   onAll = (e) => {
//     console.log(e.target.name + " " + e.target.value);
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   onSave = (e) => {
//     e.preventDefault();

//     this.props.addMovie(this.state);
//     this.setState({
//       name: "",
//       views: "",
//     });
//   };
//   render() {
//     return (
//       <form
//         className="d-flex justify-content-between align-items-center"
//         onSubmit={this.onSave}
//       >
//         <div>
//           <input
//             type="text"
//             placeholder="Qanday Kino"
//             className="p-2 flex-fill"
//             onChange={this.onAll}
//             name="name"
//             value={this.state.name}
//           />
//           <input
//             type="number"
//             placeholder="Necha marta ko'rilgan"
//             className="p-2 flex-fill"
//             onChange={this.onAll}
//             name="views"
//             value={this.state.views}
//           />
//         </div>
//         <button type="submit" className="btn btn-outline-dark flex-fill">
//           Saqlash
//         </button>
//       </form>
//     );
//   }
// }

const FormMovie = ({ addMovie }) => {
  const [name, setName] = useState("");
  const [views, setViews] = useState("");

  const onAll = (e) => {
    console.log(e.target.name + " " + e.target.value);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setViews(e.target.value);
    }
  };
  const onSave = (e) => {
    e.preventDefault();
    addMovie({ name, views });
    setName("");
    setViews("");
  };
  return (
    <form
      className="d-flex justify-content-between align-items-center"
      onSubmit={onSave}
    >
      <div>
        <input
          type="text"
          placeholder="Qanday Kino"
          className="p-2 flex-fill"
          onChange={onAll}
          name="name"
          value={name}
        />
        <input
          type="number"
          placeholder="Necha marta ko'rilgan"
          className="p-2 flex-fill"
          onChange={onAll}
          name="views"
          value={views}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark flex-fill">
        Saqlash
      </button>
    </form>
  );
};

export default FormMovie;
