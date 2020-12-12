import React from "react";
import FlatCard from "./FlatCard";

// eslint-disable-next-line react/prefer-stateless-function
class FlatsList extends React.Component {
  render() {
    const { flats, selectFlat } = this.props;
    const list = [];
    flats.map((flat) => {
      list.push(
        <FlatCard flat={flat} key={flat.name} selectFlat={selectFlat} />
      );
    });

    return <div className="flat-list">{list}</div>;
  }
}

export default FlatsList;
