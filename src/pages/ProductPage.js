import React from "react";
import Sidebar from "../components/Product/Sidebar";
import Products from "../components/Product/Products";

const ProductPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 auto" }}>
        <Sidebar />
      </div>
      <div style={{ flex: "1 1 auto" }}>
        <Products />
      </div>
    </div>
  );
};

export default ProductPage;
