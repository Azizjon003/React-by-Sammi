import { Component } from "react";
import Title from "../title/title.js";
import Body from "../body/body.js";
class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Body />
      </div>
    );
  }
}

export default App;
