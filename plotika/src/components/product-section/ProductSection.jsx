import React, { useState } from "react";
import "./ProductSection.css";
import "./ProductContainer";
import ProductContainer from "./ProductContainer";
const productImages = require.context("../../images/diseños", true);

const ProductSection = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      img: productImages(`./Superheroes1.jpg`),
    },
    {
      id: 2,
      img: productImages(`./Superheroes2.jpg`),
    },
    {
      id: 3,
      img: productImages(`./Superheroes3.jpg`),
    },
    {
      id: 4,
      img: productImages(`./Superheroes4.jpg`),
    },
    {
      id: 5,
      img: productImages(`./Superheroes5.jpg`),
    },
    {
      id: 6,
      img: productImages(`./Superheroes6.jpg`),
    },

    {
      id: 7,
      img: productImages(`./Superheroes7.jpg`),
    },
    {
      id: 8,
      img: productImages(`./Superheroes8.jpg`),
    },
  ]);

  return (
    <>
      <div className="product-container">
        {products.map((products) => {
          return <ProductContainer key={products.id} img={products.img} />;
        })}
      </div>
    </>
  );
};

export default ProductSection;
