import React, { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";

const Product = ({ product }) => {
  const [showMore, setShowMore] = useState(false);
  const { name, image, category, supplier, description } = product;

  return (
    <div className="card rounded-xl bg-base-100 shadow-[0px_0px_10px_rgba(14,31,81,0.2)]">
      <figure className="2xl:p-10 xl:p-7 lg:p-14 sm:p-14 p-8">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body pt-0 gap-0">
        <h2 className="text-secondary 2xl:text-2xl xl:text-xl lg:text-2xl md:text-xl text-2xl text-start font-bold text_raleway">
          {category}
        </h2>
        <h5 className="text-primary pt-1 2xl:text-xl xl:text-base lg:text-2xl md:text-lg text-xl text-start font-bold text_raleway">
          {name}
        </h5>
        <p className="text-primary 2xl:text-lg xl:text-base lg:text-lg md:text-base text-lg font-medium py-2 text_raleway">
          {showMore ? description : `${description.substring(0, 99)}`}
          <button
            className="btn btn-primary btn-link capitalize 2xl:text-lg xl:text-base lg:text-lg md:text-base text-lg pl-1 pr-0 border-none items-start"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </p>
        <div className="flex items-center 2xl:gap-3 xl:gap-2 gap-4">
          <div className="bg-[#ff3e541a] 2xl:p-4 xl:p-2 lg:p-4 md:p-3 p-4 rounded-xl">
            <BsBoxSeam className="2xl:text-5xl xl:text-4xl lg:text-5xl md:text-4xl text-5xl text-secondary" />
          </div>
          <div>
            <h5 className="text-secondary 2xl:text-base xl:text-sm lg:text-base md:text-sm text-lg font-bold text_raleway">
              Supplier
            </h5>
            <p className="text-primary 2xl:text-base xl:text-xs lg:text-lg md:text-xs text-base font-semibold text_raleway">
              {supplier}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
