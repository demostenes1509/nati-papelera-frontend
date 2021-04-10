import React, { Component } from 'react';
import Product from './Product/Product';

class CategoryContent extends Component {
  render() {
    return (
      <section className="main-content clear-fix">
        <Product />
      </section>
    );
  }
}

export default CategoryContent;
