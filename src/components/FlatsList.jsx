import React from "react";
import FlatCard from "./FlatCard";

// eslint-disable-next-line react/prefer-stateless-function
class FlatsList extends React.Component {
  render() {
    const { flats } = this.props;
    const list = [];
    flats.map((flat) => {
      console.log(flat);
      list.push(<FlatCard flat={flat} key={flat.name} />);
    });

    return <div className="flat-list">{list}</div>;
  }
}

export default FlatsList;
