import React, { Component } from 'react';
import ProductsList from '../ProductsList/ProductsList';

class CategoryContent extends Component {
  render() {
    return (
      <section className="main-content clear-fix">
        <ProductsList />
      </section>
    );
  }
}

export default CategoryContent;
