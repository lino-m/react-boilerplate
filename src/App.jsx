import React from "react";
import flats from "../data/flats";
import FlatsList from "./components/FlatsList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: flats,
    };
  }

  render() {
    return (
      <div>
        <FlatsList flats={this.state.loaded} />
      </div>
    );
  }
}

export default App;
