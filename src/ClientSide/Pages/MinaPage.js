import React from "react";
import CardShop from "../Components/Card Shop/CardShop";
import Card from "../Components/Card/Card";
import FilterData from "../Components/FilterData/FilterData";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Header/Header1";
import HeaderShop from "../Components/Header/HeaderShop";
import Reference from "../Components/Reference/Reference";

function MinaPage() {
  return (
    <>
      {/* <Header1 /> */}
      <HeaderShop />
      <Reference />
      {/* <FilterData /> */}
      <CardShop />
      {/* <Card /> */}
      <Footer />
    </>
  );
}

export default MinaPage;
