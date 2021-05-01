import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import Slider from '../Slider/Slider';

const MainContent = () => {
  return (
    <section className="main-content clear-fix">
      <Slider />
      <ProductsList />
    </section>
  );
};

export default MainContent;
