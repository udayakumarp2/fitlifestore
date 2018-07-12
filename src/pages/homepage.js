import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";
import mainLogo from "./mainLogo.jpg";
import "./homepage.css";

export default function Homepage(props) {
  return (
    <div>
      <div className="MainContainer">
        <img src={mainLogo} alt="Fitlife" />
      </div>

      <ProductListing products={data.products} />
    </div>
  );
}
