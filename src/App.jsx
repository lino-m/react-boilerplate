import React from "react";
import flats from "../data/flats";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatsList: flats,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div className="">
          {this.state.flatsList.flats.map((flat) => {
            console.log(flat);
          })}
        </div>
      </div>
    );
  }
}

export { App };
