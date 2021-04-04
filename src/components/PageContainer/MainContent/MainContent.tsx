import React, { Component } from "react";
import MainProducts from "./MainProducts/MainProducts";
import MainSlider from "./MainSlider/MainSlider";
import Product from "./Product/Product";

class MainContent extends Component {
  render() {
    return (
      <section className="main-content clear-fix">
        <MainSlider />
        <MainProducts />
        {/* <Product /> */}
      </section>
    );
  }
}

export default MainContent;
