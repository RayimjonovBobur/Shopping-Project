import React from "react";
import Card from "../Components/Card/Card";
import FilterData from "../Components/FilterData/FilterData";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Header/Header1";
import HeaderShop from "../Components/Header/HeaderShop";

function MinaPage() {
  return (
    <>
      {/* <Header1 /> */}
      <HeaderShop/>
      <FilterData />
      <Card />
      <Footer />
    </>
  );
}

export default MinaPage;
