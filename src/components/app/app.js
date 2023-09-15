import { Component } from "react";
import User from "../user/user.js";
class App extends Component {
  render() {
    return (
      <>
        <User lastname={"Aliqulov"} firstname={"Azizjon"} link={"azizjon.uz"} />
        <User lastname={"Esanov"} firstname={"Jamshid"} link={"azizjon.uz"} />
      </>
    );
  }
}

export default App;
