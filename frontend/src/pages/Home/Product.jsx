import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsList from "./product.json";
import Card from "../../components/card";

const Product = () => {
  const [products, setProduct] = useState(productsList);
  const slider = useRef(null);
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        setting: true,
        Infinite: true,
        slideToShow: 3,
        slideToScroll: 3,
      },
      {
        breakpoint: 970,
        setting: true,
        Infinite: true,
        slideToShow: 3,
        slideToScroll: 1,
      },
      {
        breakpoint: 1024,
        setting: true,
        Infinite: true,
        slideToShow: 2,
        slideToScroll: 2,
      },
    ],
  };
  return (
    <div className="section-container my-20 relative">
      <div className="text-left">
        <p className="subtitle">Spaciel Items</p>
        <h2 className="title">Standout Items from Our Products</h2>
      </div>
      <div className="slider-container">
        <slider
          ref={slider}
          {...setting}
          className="overflow-hidden mt-10 space-x-5"
        >
          {products.length > 0 &&
            products.map((item, index) => {
              return <card item={item} key={index} />;
            })}
        </slider>
      </div>
    </div>
  );
};

export default Product;
