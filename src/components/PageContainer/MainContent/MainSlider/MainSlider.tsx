import React, { Component } from "react";
import slideImg from "../../../../images/slide-img.png";

class MainSlider extends Component {
  render() {
    return (
      <div className="main-slider">
        <div className="slider-container">
          <ul className="slider-images">
            <li>
              <a href="#">
                <img src={slideImg} alt="slide image" />
              </a>
            </li>
          </ul>
        </div>
        <div className="slider-btn-container">
          <ul className="slider-btns">
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#" className="active-slide">
                3
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainSlider;
