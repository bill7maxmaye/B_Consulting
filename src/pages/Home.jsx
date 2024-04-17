import React from "react";
import Slider from "../components/Slider.jsx";
import HomeDetail from "@/components/HomeDetail.jsx";
// import Header from "../components/Header.jsx";
// import WhyUs from "@/components/WhyUs.jsx";
const Home = () => {
  return (
    <div className="z-0">
      <Slider />
      <HomeDetail />
      {/* <Header /> */}
      {/* <WhyUs /> */}
    </div>
  );
};

export default Home;
