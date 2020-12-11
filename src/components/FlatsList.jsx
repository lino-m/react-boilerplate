import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class FlatsList extends React.Component {
  render() {
    const { flats } = this.props;
    const list = [];
    flats.map((flat) => {
      let newDiv = (
        <div
          className="card"
          key={flat.name}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`,
          }}
        >
          <div className="card-category">
            {flat.price}
            {flat.priceCurrency}
          </div>
          <div className="card-description">
            <h2>Super 60m2 in trendy neighborhood!</h2>
          </div>
          <a className="card-link" href="#"></a>
        </div>
      );
      list.push(newDiv);
    });

    return <div className="flat-list">{list}</div>;
  }
}

export default FlatsList;
