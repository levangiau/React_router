import React from "react";
//
class ProductCore extends React.Component {
  render() {
    let { match } = this.props;
    console.log("match", match);
    let name = match.params.slug;
    return <h1>Sản Phẩm: {name}</h1>;
  }
}
export default ProductCore;
