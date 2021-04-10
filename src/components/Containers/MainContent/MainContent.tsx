import React, { Component } from 'react';
import ProductsList from './ProductsList/ProductsList';
import Slider from '../Slider/Slider';

class MainContent extends Component {
  render() {
    return (
      <section className="main-content clear-fix">
        <Slider />
        <ProductsList />
      </section>
    );
  }
}

export default MainContent;
