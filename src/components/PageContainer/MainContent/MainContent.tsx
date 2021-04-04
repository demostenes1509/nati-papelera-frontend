import React, { Component } from "react";
import MainProducts from "./MainProducts/MainProducts";
import MainSlider from "./MainSlider/MainSlider";

class MainContent extends Component {
  render() {
    return (
      <section className="main-content">
        <MainSlider />
        <MainProducts />
      </section>
    );
  }
}

export default MainContent;
