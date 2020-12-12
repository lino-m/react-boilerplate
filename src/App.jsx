import React from "react";
import flats from "../data/flats";
import FlatsList from "./components/FlatsList";
import SimpleMap from "./components/SimpleMap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: flats,
      selectedFlat: null,
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat,
    });
    console.log(this.state.selectedFlat);
  };

  render() {
    return (
      <div>
        <FlatsList flats={this.state.loaded} selectFlat={this.selectFlat} />
        <SimpleMap />
      </div>
    );
  }
}

export default App;
