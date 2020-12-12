import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Marker extends React.Component {
  render() {
    const { selected } = this.props;
    let classes = "marker";
    if (selected) {
      classes += " selected";
    }
    return <div className={classes} />;
  }
}

export default Marker;
