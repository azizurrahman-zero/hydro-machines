import React from "react";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import References from "../Components/References";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <References />
      <Products />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
