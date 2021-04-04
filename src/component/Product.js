import React from "react";
import { NavLink, Route } from "react-router-dom";
import Products from "./Product-Core";
//
class Product extends React.Component {
  render() {
    let product = [
      {
        id: 1,
        slug: "iphone",
        name: "Iphone X",
        price: 5000,
      },
      {
        id: 2,
        slug: "samsung",
        name: "Sam Sung 7",
        price: 3000,
      },
      {
        id: 3,
        slug: "oppo",
        name: "Oppo 9",
        price: 1000,
      },
    ];
    let { match } = this.props;
    let url = match.url;
    // console.log("match", match);
    let result = product.map((data, index) => {
      return (
        <NavLink to={`${url}/${data.slug}`} key={index}>
          <li className="list-group-item">
            {data.id} - {data.name} - {data.price}
          </li>
        </NavLink>
      );
    });
    let { location } = this.props;
    console.log(location);
    return (
      <div className="container">
        <h2>Danh Sách Sản Phẩm</h2>
        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>

        <div className="row">
          <Route path="/product/:slug" component={Products} />
        </div>
      </div>
    );
  }
}
export default Product;
