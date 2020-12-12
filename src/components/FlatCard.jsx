import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class FlatCard extends React.Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const { flat } = this.props;

    return (
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`,
        }}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {flat.price}
          {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default FlatCard;
