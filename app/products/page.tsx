import React from "react";
import AllProduct from "./section/AllProduct";
import BestSeller from "./section/BestSeller";

export default function Products() {
  return (
    <div className="container mt-32  md:mt-40 max-w-[90%] md:max-w-[1100px] m-auto">
      <BestSeller />
      <AllProduct />
    </div>
  );
}
