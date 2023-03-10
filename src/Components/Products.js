import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts();

  return (
    <>
      <div className="2xl:mt-20 mt-10 pb-10 sm:px-20 px-10">
        <p className="2xl:pb-2 md:pb-0.5 pb-0 text-secondary text-center sm:text-lg 2xl:text-3xl md:text-xl xl:text-xl font-bold text_raleway">
          Items
        </p>
        <h1 className="2xl:text-6xl text-3xl sm:text-4xl xl:text-4xl font-bold text-primary text-center text_raleway">
          Top Products
        </h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-7 pt-10">
          {products.slice(0, 4).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn text-white normal-case font-semibold text-base bg-secondary border-none hover:border-none hover:bg-[#ed1b24bf] px-8 py-2.5 text_raleway ml-12 sm:ml-0">
          <Link
            to="/products"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            View All Products
          </Link>
        </button>
      </div>
    </>
  );
};

export default Products;
