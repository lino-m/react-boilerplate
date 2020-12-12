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
    const { loaded, selectedFlat } = this.state;
    return (
      <div>
        <FlatsList flats={loaded} selectFlat={this.selectFlat} />
        <SimpleMap flats={loaded} selectedFlat={selectedFlat} />
      </div>
    );
  }
}

export default App;
